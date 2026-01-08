import React from 'react'
import { useSelector } from 'react-redux';
import CommandResult from './CommandResult';

const TerminalHistory = () => {
    const {commandHistory} = useSelector(state => state.terminal);
  return (
    <>
      {commandHistory.map((cmd) => (
        <React.Fragment key={cmd.id}>
          <div className="flex items-center gap-1 mt-4 text-green-400 font-mono">
            <span className="font-bold">harshchouhan:$</span>
            <span>{cmd.command}</span>
          </div>
          <CommandResult command={cmd.command} />
        </React.Fragment>
      ))}
    </>
  )
}

export default TerminalHistory