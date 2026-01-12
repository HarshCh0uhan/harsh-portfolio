import React from 'react'
import Whoami from './Whoami';
import Stats from './Stats';
import SkillMatrix from './SkillMatrix';
import Projects from './Projects';
import CommandHistory from './CommandHistory';
import { actionCommands } from '../utils/constants';

const CommandResult = ({ command }) => {
  const normalized = command.trim().toLowerCase();
  return (
    <div className='flex overflow-x-auto mt-1 mb-4'>
        {(normalized === "whoami") ? (
            <Whoami />
        ) : (normalized === "stats") ? (
            <Stats />
        ) : (normalized === "skills") ? (
            <SkillMatrix />
        ) : (normalized === "projects") ? (
            <Projects />
        ) : (normalized === "history") ? (
            <CommandHistory />
        ) : (actionCommands.includes(normalized)) ? (
            <div className="text-gray-200">
                <p>Opening {normalized}...</p>
                <p className="text-green-400">Command executed.</p>
            </div>
        ) : (
            <p className="text-gray-200">Command not found: {normalized}</p>
        )}
    </div>
  )
}

export default CommandResult