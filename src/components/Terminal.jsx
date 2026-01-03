import React from 'react'
import Intro from './Intro'

const Terminal = () => {
  return (
    <div className='bg-black/70 w-[70%] h-[90%] rounded-xl border border-white/30 shadow-gray-400 shadow-2xs backdrop-blur-md  p-5 font-mono text-green-400'>
      <Intro />
       <div className='flex justify-start items-center'> 
        <h1 className='font-bold '>harshchouhan:$</h1>
        <input type="text" className='bg-transparent border-none p-1'/>
       </div>
    </div>   
  )
}

export default Terminal