import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCommand,
  setCursor,
  updateCommandHistory,
  emptyCommandHistory,
} from "../utils/terminalSlice";
import {
  resumeURL,
  linkedinURL,
  githubURL,
  gfgURL,
  emailURL,
  actionCommands,
} from "../utils/constants";
import CommandHistory from "./CommandHistory";

const TerminalInput = () => {
  const dispatch = useDispatch();
  const { currentCommand: command, currentCursor: cursor, commandHistory } = useSelector(
    (state) => state.terminal
  );

  const inputRef = useRef(null);
  const bottomRef = useRef(null);
  const terminalRef = useRef(null);
  
  const actionCommand = (cmd) => {
    if (cmd === "email") window.open(emailURL, "_blank");
    else if (cmd === "resume") window.open(resumeURL, "_blank");
    else if (cmd === "linkedin") window.open(linkedinURL, "_blank");
    else if (cmd === "github") window.open(githubURL, "_blank");
    else if (cmd === "gfg") window.open(gfgURL, "_blank");
  };
  
  const executeCommand = (cmd) => {
    if (!cmd.trim()) return;

    const normalized = cmd.trim().toLowerCase();

    if (normalized === "cls" || normalized === "clear") {
      dispatch(emptyCommandHistory());
      dispatch(setCommand(""));
      dispatch(setCursor(0));
      return;
    }

    if (actionCommands.includes(normalized)) {
      actionCommand(normalized);
    }
  
    dispatch(updateCommandHistory({ id: Date.now(), command: normalized }));
    dispatch(setCommand(""));
    dispatch(setCursor(0));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    executeCommand(command);
  };

  // Handle special keys only (arrows, enter, etc.)
  const handleKeyDown = (e) => {
    // Let input handle regular character input naturally
    if (e.key === "Enter") {
      e.preventDefault();
      executeCommand(command);
    } 
    else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const newCursor = Math.max(0, cursor - 1);
      dispatch(setCursor(newCursor));
      // Update input selection
      setTimeout(() => {
        inputRef.current?.setSelectionRange(newCursor, newCursor);
      }, 0);
    } 
    else if (e.key === "ArrowRight") {
      e.preventDefault();
      const newCursor = Math.min(command.length, cursor + 1);
      dispatch(setCursor(newCursor));
      // Update input selection
      setTimeout(() => {
        inputRef.current?.setSelectionRange(newCursor, newCursor);
      }, 0);
    }
    else if (e.key === "Home") {
      e.preventDefault();
      dispatch(setCursor(0));
      setTimeout(() => {
        inputRef.current?.setSelectionRange(0, 0);
      }, 0);
    }
    else if (e.key === "End") {
      e.preventDefault();
      dispatch(setCursor(command.length));
      setTimeout(() => {
        inputRef.current?.setSelectionRange(command.length, command.length);
      }, 0);
    }
  };

  // Sync input cursor position with our visual cursor
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    const selectionStart = e.target.selectionStart;
    
    dispatch(setCommand(newValue));
    dispatch(setCursor(selectionStart));
  };

  // Sync cursor when user clicks in the input
  const handleInputClick = (e) => {
    const selectionStart = e.target.selectionStart;
    dispatch(setCursor(selectionStart));
  };

  // Focus input when terminal is clicked
  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  // Auto-focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Keep input cursor in sync with our cursor state
  useEffect(() => {
    if (inputRef.current && document.activeElement === inputRef.current) {
      inputRef.current.setSelectionRange(cursor, cursor);
    }
  }, [cursor, command]);

  // Auto-scroll to bottom when command history updates
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [commandHistory.length]);

  return (
    <>
      <div 
        ref={terminalRef}
        onClick={handleTerminalClick}
        className="flex items-center gap-1 mt-4 text-green-400 font-mono leading-none cursor-text"
      >
        <span className="font-bold">harshchouhan:$</span>
        <span>
          {command.slice(0, cursor).split("").map((ch, i) =>
            ch === " " ? (
              <span key={i} className="terminal-space"></span>
            ) : (
              <span key={i}>{ch}</span>
            )
          )}
        </span>
        <span className="terminal-cursor"></span>
        <span>{command.slice(cursor)}</span>
        
        {/* Hidden but functional input for keyboard capture */}
        <form onSubmit={handleSubmit} className="absolute">
          <input 
            ref={inputRef}
            value={command}
            onChange={handleInputChange}
            onClick={handleInputClick}
            onKeyDown={handleKeyDown}
            type="text"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            className="opacity-0 pointer-events-auto w-px h-px absolute"
            style={{ caretColor: 'transparent' }}
          />
        </form>
      </div>

      <div ref={bottomRef} />
    </>
  );
};

export default TerminalInput;