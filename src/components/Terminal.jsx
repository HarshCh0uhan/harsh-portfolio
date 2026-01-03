import React from 'react'
import Intro from './Intro'
import { useState } from 'react'

const Terminal = () => {
  const [minimize, setMinimize] = useState(false)
  
  
  const handleMinimize = (event) => {
    setMinimize(!minimize);
  }

  console.log("minimize:", minimize);

  return (
    <div className={`bg-black/70  rounded-xl border border-white/30
     shadow-gray-400 shadow-2xs backdrop-blur-md font-mono
     transition-all duration-100 ease-in-out overflow-hidden
     ${minimize ? 'w-[10%] h-[5%]' : 'w-[70%] h-[90%]'}`}>
      {/* Terminal Header */}
      <div className='flex justify-between mb-5 rounded-xl border-b-2 border-white/30 p-3'>
        <div className='flex'>
          <div onClick={handleMinimize} className='cursor-pointer'>🟡</div>
        </div>
        <div className='text-white'>Terminal</div>
      </div>
      
      {/* Intro Component */}
      {!minimize && (
      <div className='text-green-400 w-[70%] h-[10%] p-5'>
        <Intro />
        <div className='flex justify-start items-center'> 
          <h1 className='font-bold '>harshchouhan:$</h1>
          <input type="text" className='bg-transparent border-none p-1'/>
        </div>
      </div>)} 
    </div>
  )
}

export default Terminal