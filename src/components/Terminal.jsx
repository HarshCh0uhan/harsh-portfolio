import React from 'react'
import { useState } from 'react'

const Terminal = ({children, title, window}) => {
  const [minimize, setMinimize] = useState(window)
  
  
  const handleMinimize = (event) => {
    setMinimize(!minimize);
  }

  return (
    <div className={`bg-black/70 rounded-xl border border-white/30
     shadow-gray-400 shadow-2xs backdrop-blur-md font-mono
     transition-all duration-200 ease-in-out overflow-hidden
     ${minimize ? 'w-[10%] h-[5%]' : 'w-[70%] h-[90%]'}`} >
      {/* Terminal Header */}
      <div className='flex justify-between mb-5 rounded-xl border-b-2 border-white/30 p-3'>
        <div className='flex'>
          <div onClick={(e) => {
            e.stopPropagation()
            handleMinimize()
          }} className='cursor-pointer'>🟡</div>
        </div>
        <div className='text-white'>{title}</div>
      </div>
      
      {/* Intro Component */}
      {!minimize && (
      <div className='text-green-400 w-[70%] h-[10%] px-5'>
        {children}
      </div>)} 
    </div>
  )
}

export default Terminal