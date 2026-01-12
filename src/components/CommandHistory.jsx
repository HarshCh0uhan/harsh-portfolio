import React from 'react'
import { useSelector } from 'react-redux'

const CommandHistory = () => {
    const { commandHistory } = useSelector((state) => state.terminal);
  return (
    <div className="text-gray-200">
      <p className="font-bold mb-2">Command History:</p>
      {commandHistory.map((cmd) => (
        <div key={cmd.id} className="mb-1">
          <span className="text-green-400">{cmd.command}</span>
        </div>
      ))}
    </div>
  )
}

export default CommandHistory