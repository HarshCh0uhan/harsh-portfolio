import { useEffect, useState } from "react"

const TerminalInput = () => {
  const [command, setCommand] = useState("");
  const [cursor, setCursor] = useState(0);

  useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.ctrlKey || e.metaKey || e.altKey) return
        e.preventDefault()
  
        if (e.key === "Backspace") {
          if (cursor === 0) return
          setCommand(
            command.slice(0, cursor - 1) + command.slice(cursor)
          )
          setCursor(cursor - 1)
        }

        else if(e.key === "Delete") {
          if(cursor === command.length) return
          setCommand(command.slice(0, cursor) + command.slice(cursor + 1));
        }
  
        else if (e.key === "Enter") {
          setCommand("")
          setCursor(0)
        }
  
        else if (e.key === "ArrowLeft") {
          setCursor((c) => Math.max(0, c - 1))
        }
  
        else if (e.key === "ArrowRight") {
          setCursor((c) => Math.min(command.length, c + 1))
        }

        else if (e.key === " ") {
          setCommand(
            command.slice(0, cursor) + " " + command.slice(cursor)
          )
          setCursor(cursor + 1)
        }


        else if (e.key.length === 1) {
          setCommand(
            command.slice(0, cursor) + e.key + command.slice(cursor)
          )
          setCursor(cursor + 1)
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