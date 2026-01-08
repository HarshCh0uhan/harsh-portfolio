import React from 'react'
import Whoami from './Whoami';
import Stats from './Stats';
import SkillMatrix from './SkillMatrix';
import Projects from './Projects';

const CommandResult = ({ command }) => {
  return (
    <div className='flex overflow-x-auto mt-1 mb-4'>
        {(command === "whoami") ? (
            <Whoami />
        ) : (command === "stats") ? (
            <Stats />
        ) : (command === "skills") ? (
            <SkillMatrix />
        ) : (command === "projects") ? (
            <Projects />
        ) : (
            <p className="text-gray-200">Command not found: {command}</p>
        )}
    </div>
  )
}

export default CommandResult