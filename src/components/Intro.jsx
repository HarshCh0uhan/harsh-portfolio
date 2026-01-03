import React from 'react'
import harshImg from '../assets/harsh.png'
import { Link } from 'react-router-dom'
import {useTypewriter} from '../hooks/useTypewriter'
import { resumeURL, linkedinURL, githubURL, gfgURL, introText } from '../constants/constants'
import TerminalInput from './TerminalInput'

const Intro = () => {
  const whoami = useTypewriter("whoami", 60, true);
  const intro = useTypewriter(introText, 10, whoami.done);
  const stats = useTypewriter("stats", 60, intro.done);

  return (
    <div>
      <div className="flex items-center">
    
        {/* Image */}
        <img
          src={harshImg}
          alt="Harsh Chouhan"
          className="size-[30%]"
        />

        {/* Content */}
        <div className="flex flex-col gap-3 text-[95%]">

          {/* whoami */}
          <h1 className="font-bold text-green-400">
            harshchouhan:$ <span className="underline">{whoami.displayed}</span>
            {!whoami.done && <span className="blinking-cursor">|</span>}
          </h1>

          {whoami.done && (<p className="text-gray-200 leading-relaxed">
            {intro.displayed}
            {!intro.done && <span className="blinking-cursor">|</span>}
          </p>)}

          {/* HR Links */}
          {intro.done &&(<div className="flex justify-evenly text-sm">
            <a
              href={resumeURL}
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-white underline underline-offset-4"
            >
              Resume
            </a>
            <a
              href={linkedinURL}
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-white underline underline-offset-4"
            >
              LinkedIn
            </a>
            <a
              href={githubURL}
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-white underline underline-offset-4"
            >
              GitHub
            </a>
            <a
              href={gfgURL}
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-white underline underline-offset-4"
              >
              GFG
            </a>
          </div>)}

          {/* stats */}
          {intro.done &&(
          <>
            <h1 className="font-bold text-green-400 mt-4">
              harshchouhan:$ <span className="underline">{stats.displayed}</span>
              {!stats.done && <span className="blinking-cursor">|</span>}
            </h1>

            {stats.done && (
              <div className="flex flex-col gap-1 text-gray-200">
              <p>
                <span className="text-green-300">GFG:</span> Top 8 Institute Rank
              </p>
              <p>
                <span className="text-green-300">LeetCode:</span> 500+ (Brute → Better → Optimal)
              </p>
              <p>
                <span className="text-green-300">Focus:</span> Patterns, Clean C++
              </p>
            </div>)}
          </>
          )}
        </div>
      </div>

      {/* Terminal Input */}
      <TerminalInput />
    </div>
  )
}

export default Intro
