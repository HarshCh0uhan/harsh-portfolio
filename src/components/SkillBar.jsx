import React from 'react'

const SkillBar = ({ label, value }) => {
  return (
    <div className="flex items-center gap-3 font-mono text-sm sm:text-base">
      
      {/* Label */}
      <span className="w-20 text-green-300">
        {label}
      </span>

      {/* Bar */}
      <div className="flex-1 bg-gray-800 border border-green-700 h-4 relative overflow-hidden">
        <div
          className="bg-green-400 h-full transition-all duration-1000 ease-out"
          style={{ width: `${value}%` }}
        />
      </div>

      {/* Percentage */}
      <span className="w-12 text-right text-gray-300">
        {value}%
      </span>
    </div>
  )
}

export default SkillBar
