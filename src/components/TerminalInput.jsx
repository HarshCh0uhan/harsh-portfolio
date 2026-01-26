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
  suggetions
} from "../utils/constants";

const TerminalInput = () => {
  const dispatch = useDispatch();
  const { currentCommand: command, currentCursor: cursor, commandHistory } = useSelector(
    (state) => state.terminal
  );

  const inputRef = useRef(null);
  const bottomRef = useRef(null);  
  const [historyIndex, setHistoryIndex] = useState(commandHistory.length);

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
    setHistoryIndex(commandHistory.length);
  }, [commandHistory.length]);  
  
  // Sync input cursor position with our visual cursor
  const handleInputChange = (e) => {
    const newValue = e.target.value.trim().toLowerCase();
    const selectionStart = e.target.selectionStart;    
    dispatch(setCommand(newValue));
    dispatch(setCursor(selectionStart));
  };

  // Focus input when terminal is clicked
  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const actionCommand = (cmd) => {
    if (cmd === "email") window.open(emailURL, "_blank");
    else if (cmd === "resume") window.open(resumeURL, "_blank");
    else if (cmd === "linkedin") window.open(linkedinURL, "_blank");
    else if (cmd === "github") window.open(githubURL, "_blank");
    else if (cmd === "gfg") window.open(gfgURL, "_blank");
  };
  
  const executeCommand = (cmd) => {
    if (!cmd.trim()) return;    

    if (cmd === "cls" || cmd === "clear") {
      dispatch(emptyCommandHistory());
      dispatch(setCommand(""));
      dispatch(setCursor(0));
      return;
    }

    if (actionCommands.includes(cmd)) {
      actionCommand(cmd);
    }

    dispatch(updateCommandHistory({ id: Date.now(), command: cmd }));
    dispatch(setCommand(""));
    dispatch(setCursor(0));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    executeCommand(command);
  };

  // Handle special keys only (arrows, enter, etc.)
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      executeCommand(command);
    } 
    else if(e.key === "ArrowUp" || e.key === "ArrowDown"){
      e.preventDefault();
      const index = historyIndex;
      if(commandHistory.length && e.key === "ArrowUp") {
        if(index > 0 && index <= commandHistory.length){
          dispatch(setCommand(commandHistory[index-1].command));
          setHistoryIndex(index - 1);
          dispatch(setCursor(commandHistory[index-1].command.length));
        }
      }
      else if(commandHistory.length && e.key === "ArrowDown") {
        if(index === commandHistory.length - 1){
          dispatch(setCommand(""));
          setHistoryIndex(index + 1);
          dispatch(setCursor(0));
        }

        else if(index >= 0 && index < commandHistory.length-1){
          dispatch(setCommand(commandHistory[index+1].command));
          setHistoryIndex(index + 1);
          dispatch(setCursor(commandHistory[index+1].command.length));
          
        }
      }
    }
    else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const newCursor = Math.max(0, cursor - 1);
      dispatch(setCursor(newCursor));
      inputRef.current?.setSelectionRange(newCursor, newCursor);
    } 
    else if (e.key === "ArrowRight") {
      e.preventDefault();
      const newCursor = Math.min(command.length, cursor + 1);
      dispatch(setCursor(newCursor));
      inputRef.current?.setSelectionRange(newCursor, newCursor);
    }
    else if(e.key === "Tab") {
      e.preventDefault();
      const suggetion = suggetions.filter(cmd => cmd.startsWith(command))[0];
      // console.log(suggetion);
      if(suggetion){
        dispatch(setCommand(suggetion));
        dispatch(setCursor(suggetion.length));
      }
    }
    else if (e.key === "Home") {
      e.preventDefault();
      dispatch(setCursor(0));
      inputRef.current?.setSelectionRange(0, 0);
    }
    else if (e.key === "End") {
      e.preventDefault();
      dispatch(setCursor(command.length));
      inputRef.current?.setSelectionRange(command.length, command.length);
    }
  };

  return (
    <div 
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
        
        {/* Suggetions */}
        {command && (
          <span className="text-green-400/70">
            {suggetions.filter(cmd => cmd.startsWith(command))[0]?.slice(command.length)}
          </span>
        )}
      </span>


      <span ref={bottomRef} className="terminal-cursor"></span>
      <span>{command.slice(cursor)}</span>
      
      {/* Hidden but functional input for keyboard capture */}
      <form onSubmit={handleSubmit} className="absolute">
        <input 
          ref={inputRef}
          value={command}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          type="text"
          className="opacity-0 pointer-events-auto w-px h-px absolute"
          style={{ caretColor: 'transparent' }}
        />
      </form>
    </div>
  );
};

export default TerminalInput;