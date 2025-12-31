import React from 'react'
import harshImg from '../assets/harsh.png'
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <div className='flex'>
      <img src={harshImg} alt="Terminal" className='size-[30%]' />
      <div className='flex flex-col gap-2 text-[90%]'>
        <h1 className='font-bold'>harshchouhan:$
          <span> </span>
          <span className='underline'>quick intro:</span>
        </h1>
        <p className=''> \[._.]/  Hey there👋 I'm Harsh Chouhan </p>
        <p className=''>
          I am a multidisciplinary designer with a passion for creating user-centric digital experiences. 
          From ideation to execution, I thrive on solving complex problems and bringing ideas to life.
        </p>
        <h1 className='font-bold'>harshchouhan:$
          <span> </span>
          <span className='underline'>problem solving:</span>
        </h1>
        <div className='flex text-center gap-5'>
          <div className='flex-1'>
            <h1 className='underline'><Link to="https://www.geeksforgeeks.org/profile/harsh_chouhan?tab=activity"  target="_blank">GFG</Link></h1>
            <p>600+ problems solved</p>
            <p>Top 8 Rank in GFG Institute Leaderboard</p>
            <p>2144 Coding Score</p>
          </div>
          <div className='flex-1'>
            <h1 className='underline'><Link to="https://leetcode.com/u/harshcoding2004/" target="_blank">Leetcode</Link></h1>
            <p>500+ problems solved</p>
            <p>Approach: Brute → Better → Optimal</p>
            <p>Focus: Pattern recognition & clean C++ implementations</p>
          </div>
          <div className='flex-1'>
            <h1 className='underline'><Link to="https://github.com/HarshCh0uhan" target="_blank">Github</Link></h1>
            <p>HackEclipse Contributor (IIT Madras BS)</p> 
            <p>Developed and deployed the official hackathon info page for 34,000+ global students</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro