import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { setCommand, setCursor, updateCommandHistory } from "../utils/terminalSlice";

const TerminalInput = () => {
  const dispatch = useDispatch();
  const {
    currentCommand: command,
    currentCursor: cursor,
  } = useSelector(state => state.terminal);  

  useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.ctrlKey || e.metaKey || e.altKey) return
        const BLOCKED_KEYS = [
          "Backspace",
          "Delete",
          "Enter",
          "ArrowLeft",
          "ArrowRight",
          " "
        ];

        if (BLOCKED_KEYS.includes(e.key)) {
          e.preventDefault();
        }
  
        if (e.key === "Backspace") {
          if (cursor === 0) return
          dispatch(setCommand(
            command.slice(0, cursor - 1) + command.slice(cursor)
          ))
          dispatch(setCursor(cursor - 1))
        }

        else if(e.key === "Delete") {
          if(cursor === command.length) return
          dispatch(setCommand(command.slice(0, cursor) + command.slice(cursor + 1)));
        }
  
        else if (e.key === "Enter") {
          if (!command.trim()) return;
          
          dispatch(setCommand(""));
          dispatch(setCursor(0));
          dispatch(updateCommandHistory({
            id: Date.now(),
            command}));
        }
        
        else if (e.key === "ArrowLeft") {
          dispatch(setCursor(Math.max(0, cursor - 1)))
          
        }
        
        else if (e.key === "ArrowRight") {
          dispatch(setCursor(Math.min(command.length, cursor + 1)))
        }

        else if (e.key === " ") {
          dispatch(setCommand(
            command.slice(0, cursor) + " " + command.slice(cursor)
          ));
          dispatch(setCursor(cursor + 1))
        }
        
        
        else if (e.key.length === 1) {
          dispatch(setCommand( command.slice(0, cursor) + e.key + command.slice(cursor) ));
          dispatch(setCursor(cursor + 1));
        }
      }
  
      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }, [command, cursor])

  return (
    <div className="flex items-center gap-1 mt-4 text-green-400 font-mono">
      <span className="font-bold">harshchouhan:$</span>
      {/* text before cursor */}
      <span>
      {command.slice(0, cursor).split("").map((ch, i) =>
          ch === " " ? (
          <span key={i} className="terminal-space"></span>
          ) : (
          <span key={i}>{ch}</span>
          )
      )}
      </span>

      {/* cursor */}
      <span className="terminal-cursor"></span>

      {/* text after cursor */}
      <span>{command.slice(cursor)}</span>

    </div>
  )
}

export default TerminalInput
