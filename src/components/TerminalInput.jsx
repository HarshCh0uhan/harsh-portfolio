import React from 'react'

const TerminalInput = () => {
  return (
    <div className='flex items-center mt-3 gap-2 text-sm'> 
        <h1 className='font-bold shrink-0'>harshchouhan:$</h1>
        <input type="text" className='bg-transparent border-none w-full outline-none'/>
    </div>
  )
}

export default TerminalInput