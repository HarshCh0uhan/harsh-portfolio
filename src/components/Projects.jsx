import React from 'react'

const Projects = () => {
  return (
    <div className="mt-2 border border-green-700 rounded-md p-3 text-gray-200 text-sm sm:text-base">
      <p className="text-green-400 font-bold mb-3">
        ── Projects ──
      </p>

      <div className="flex flex-col gap-3">
        <div>
          <p className="text-green-300">[01] CodeInterview.Tech</p>
          <p className="ml-4">
            Role-based coding exam platform with live compiler and focus tracking
          </p>
          <a href="https://www.codeinterview.tech" target='_blank' className="ml-4 text-gray-400">
            Live → https://www.codeinterview.tech
          </a>
        </div>

        <div>
          <p className="text-green-300">[02] NetflixGPT</p>
          <p className="ml-4">
            AI-powered movie recommendation app using Gemini API
          </p>
          <a href="https://netflixgpt-3ede3.web.app" target='_blank' className="ml-4 text-gray-400">
            Live → https://netflixgpt-3ede3.web.app
          </a>
        </div>

        <div>
          <p className="text-green-300">[03] Watch-Tube</p>
          <p className="ml-4">
            YouTube clone with optimized search, caching, and live chat
          </p>
          <a href="https://watch-tube-xi.vercel.app" target='_blank' className="ml-4 text-gray-400">
            Live → https://watch-tube-xi.vercel.app
          </a>
        </div>

        <div>
          <p className="text-green-300">[04] HackEclipse</p>
          <p className="ml-4">
            Official hackathon site for 34,000+ IIT Madras students
          </p>
          <a href="https://hackthon-1-0-iitm.vercel.app" target='_blank' className="ml-4 text-gray-400">
            Live → https://hackthon-1-0-iitm.vercel.app
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects