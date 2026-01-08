import React from 'react'
import SkillBar from './SkillBar'

const SkillMatrix = () => {
  return (
    <div>
        <div className="mt-2 border border-green-700 rounded-md p-3 text-gray-200 text-sm sm:text-base font-mono">
        <p className="text-green-400 font-bold mb-2">
            ── Skill Matrix ──
        </p>

        <p>
            <span className="text-green-300">Languages :</span> C++, JavaScript, TypeScript, Python, Go
        </p>

        <p>
            <span className="text-green-300">Frontend  :</span> React, Redux, Tailwind CSS, HTML5, CSS3, NextJs
        </p>

        <p>
            <span className="text-green-300">Backend   :</span> Node.js, ExpressJs, REST APIs, Socket.IO
        </p>

        <p>
            <span className="text-green-300">Databases :</span> MongoDB, PostgreSQL, MySQL
        </p>

        <p>
            <span className="text-green-300">CS & DSA  :</span> Data Structures, Algorithms, Problem Solving, Patterns
        </p>

        <p>
            <span className="text-green-300">Dev Tools :</span> Git, GitHub, Firebase, AWS, Vercel, Docker, Postman
        </p>
        </div>
        <div className="mt-2 border border-green-700 rounded-md p-3 text-gray-200 font-mono">
        <p className="text-green-400 font-bold mb-3">
            ── Skill Levels ──
        </p>

        <div className="flex flex-col gap-2">
            <SkillBar label="DSA" value={75} />
            <SkillBar label="React" value={85} />
            <SkillBar label="Redux" value={80} />
            <SkillBar label="Node" value={70} />
        </div>
        </div>
    </div>
  )
}

export default SkillMatrix
