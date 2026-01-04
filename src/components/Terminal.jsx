import React from 'react'
import { useState } from 'react'

const Terminal = ({children, title, window, changeFlex}) => {
  const [minimize, setMinimize] = useState(window)
  
  
  const handleMinimize = (event) => {
    setMinimize(!minimize);
  }

  return (
    <div className={`bg-black/70 rounded-xl border border-white/30
     shadow-gray-400 shadow-2xs backdrop-blur-md font-mono
     transition-all duration-300 ease-in-out overflow-auto no-scrollbar
     ${minimize ? 'w-full md:w-[20%] h-[5%] lg:h-[8%]' 
    : `w-full h-[85vh] md:h-[90%] ${changeFlex}`}`}>
      
      {/* Terminal Header */}
      <div onClick={(e) => {
            e.stopPropagation()
            handleMinimize()
          }} className='flex justify-between items-center rounded-xl z-20 bg-zinc-800/80
          backdrop-blur-3xl sticky top-0 border-b-2 cursor-pointer border-white/30
          px-3 py-2 md:p-3 text-sm md:text-base font-bold'>
        <div className='text-green-400'>{">_"}</div>
        <div className='text-white'>{title}</div>
      </div>
      
      {/* Intro Component */}
      {!minimize && (
      <div className='text-green-400 w-full h-full p-[2%]'>
        {children}
      </div>)} 
    </div>
  )
}

export default Terminal