import React from 'react'

const SkillMatrix = () => {
  return (
    <div className="mt-2 border border-green-700 rounded-md p-3 text-gray-200 text-sm sm:text-base">
      <p className="text-green-400 font-bold mb-2">
        ── Skill Matrix ──
      </p>

      <p><span className="text-green-300">Languages :</span> C++, JavaScript, TypeScript</p>
      <p><span className="text-green-300">Frontend  :</span> React, Redux, Tailwind CSS</p>
      <p><span className="text-green-300">Backend   :</span> Node.js, Express, Socket.IO</p>
      <p><span className="text-green-300">Databases :</span> MongoDB, PostgreSQL</p>
      <p><span className="text-green-300">Tools     :</span> Git, Firebase, AWS</p>
    </div>
  )
}

export default SkillMatrix