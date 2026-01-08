import React from 'react'
import { resumeURL, linkedinURL, githubURL, gfgURL, introText } from '../utils/constants'

const Whoami = () => {
  return (
    <div className="border border-green-700 rounded-md p-4 text-gray-200 font-mono">

      {/* Header */}
      <div className="mb-3">
        <p className="text-green-400 font-bold">
          ── WHOAMI ──
        </p>
        <p className="text-lg font-semibold">
          Harsh Chouhan
        </p>
        <p className="text-sm text-gray-400">
          Software Engineer · Problem Solver · Fast Learner
        </p>
      </div>

      {/* Bio */}
      <div className="flex flex-col gap-2 text-sm sm:text-base">
        {Array.isArray(introText) &&
          introText.map((line, idx) => (
            <p key={idx} className="leading-relaxed">
              {line}
            </p>
          ))
        }
      </div>

      {/* Links */}
      <div className="mt-4 pt-3 border-t border-green-800 flex flex-wrap gap-4 text-sm">
        <a
          href={resumeURL}
          target="_blank"
          rel="noreferrer"
          className="text-gray-300 hover:text-green-400 transition"
        >
          [ Resume ]
        </a>
        <a
          href={linkedinURL}
          target="_blank"
          rel="noreferrer"
          className="text-gray-300 hover:text-green-400 transition"
        >
          [ LinkedIn ]
        </a>
        <a
          href={githubURL}
          target="_blank"
          rel="noreferrer"
          className="text-gray-300 hover:text-green-400 transition"
        >
          [ GitHub ]
        </a>
        <a
          href={gfgURL}
          target="_blank"
          rel="noreferrer"
          className="text-gray-300 hover:text-green-400 transition"
        >
          [ GFG ]
        </a>
      </div>

    </div>
  )
}

export default Whoami
