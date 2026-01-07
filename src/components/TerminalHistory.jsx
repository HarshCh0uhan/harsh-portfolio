import React from 'react'
import { useSelector } from 'react-redux';
import { updateCommandHistory } from '../utils/terminalSlice';

const TerminalHistory = () => {
    const {commandHistory} = useSelector(state => state.terminal);
  return (
    <div>
        {commandHistory.map((cmd, index) => (
            <div key={index} className="flex items-center gap-1 mt-4 text-green-400 font-mono">
                <span className="font-bold">harshchouhan:$</span>
                {cmd}
            </div>
        ))}
    </div>
  )
}

export default TerminalHistory