import React from 'react'
import { resumeURL, linkedinURL, githubURL, gfgURL, introText } from '../utils/constants'

const CommandResult = ({ command }) => {
  return (
    <div className='w-[50%]'>
        {(command === "whoami") ? (
            <div className="flex flex-col gap-3 text-gray-200">
                <p>Hey, I'm Harsh.</p>

                {Array.isArray(introText) &&
                introText.map((line, idx) => (
                    <p key={idx}>{line}</p>
                ))
                }

                <div className="flex flex-wrap justify-evenly gap-3 text-sm text-gray-300 mt-2">
                <a href={resumeURL} target="_blank" rel="noreferrer" className="underline hover:text-white">
                    Resume
                </a>
                <a href={linkedinURL} target="_blank" rel="noreferrer" className="underline hover:text-white">
                    LinkedIn
                </a>
                <a href={githubURL} target="_blank" rel="noreferrer" className="underline hover:text-white">
                    GitHub
                </a>
                <a href={gfgURL} target="_blank" rel="noreferrer" className="underline hover:text-white">
                    GFG
                </a>
                </div>
            </div>
        ) : (command === "stats") ? (
            <div className="mt-2 border border-green-700 rounded-md p-3 text-gray-200 text-sm sm:text-base">
                <p className="text-green-400 font-bold mb-2">
                ── Developer Stats ──
                </p>

                <p>
                <span className="text-green-300">Rank:</span> Top 8 (GFG Institute)
                </p>
                <p>
                <span className="text-green-300">XP:</span> 500+ DSA Problems Solved
                </p>
                <p>
                <span className="text-green-300">Build Style:</span> Brute → Better → Optimal
                </p>
                <p>
                <span className="text-green-300">Main Focus:</span> Patterns · Clean C++
                </p>
            </div>
        ) : null}
    </div>
  )
}

export default CommandResult