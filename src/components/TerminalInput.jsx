import { useEffect, useRef } from "react";
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

  const bottomRef = useRef(null);

  const handleChange = (e) => {
    dispatch(setCommand(e.target.value));
  };

  const actionCommand = (cmd) => {
    if (cmd === "email") window.open(emailURL, "_blank");
    else if (cmd === "resume") window.open(resumeURL, "_blank");
    else if (cmd === "linkedin") window.open(linkedinURL, "_blank");
    else if (cmd === "github") window.open(githubURL, "_blank");
    else if (cmd === "gfg") window.open(gfgURL, "_blank");
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;

      if (e.key === "Backspace") {
        if (cursor === 0) return;
        dispatch(
          setCommand(command.slice(0, cursor - 1) + command.slice(cursor))
        );
        dispatch(setCursor(cursor - 1));
      } 
      else if (e.key === "Delete") {
        if (cursor === command.length) return;
        dispatch(
          setCommand(command.slice(0, cursor) + command.slice(cursor + 1))
        );
      } 
      else if (e.key === "Enter") {
        if (!command.trim()) return;

        const normalized = command.trim().toLowerCase();

        if (normalized === "cls" || normalized === "clear") {
          dispatch(emptyCommandHistory());
          dispatch(setCommand(""));
          dispatch(setCursor(0));
          return;
        }

        if (actionCommands.includes(normalized)) {
          actionCommand(normalized);
        }

        dispatch(updateCommandHistory({ id: Date.now(), command:normalized }));
        dispatch(setCommand(""));
        dispatch(setCursor(0));
      } 
      else if (e.key === "ArrowLeft") {
        dispatch(setCursor(Math.max(0, cursor - 1)));
      } 
      else if (e.key === "ArrowRight") {
        dispatch(setCursor(Math.min(command.length, cursor + 1)));
      } 
      else if (e.key === " ") {
        dispatch(
          setCommand(command.slice(0, cursor) + " " + command.slice(cursor))
        );
        dispatch(setCursor(cursor + 1));
      } 
      else if (e.key.length === 1) {
        dispatch(
          setCommand(command.slice(0, cursor) + e.key + command.slice(cursor))
        );
        dispatch(setCursor(cursor + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [command, cursor, dispatch]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [commandHistory.length]);

  return (
    <>
      <div className="flex items-center gap-1 mt-4 text-green-400 font-mono leading-none">
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
        <input value={command} onChange={handleChange} type="text" className="opacity-0" />
        <span>{command.slice(cursor)}</span>
      </div>

      <div ref={bottomRef} />
    </>
  );
};

export default TerminalInput;
