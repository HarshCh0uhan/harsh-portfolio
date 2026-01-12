import React from 'react';

const Instructions = () => {
  return (
    <div className="border border-green-700 rounded-md p-3 text-gray-200 font-mono text-sm sm:text-base">
      
      <p className="text-green-400 font-bold mb-2">
        ── Instructions ──
      </p>

      <div className="flex flex-col gap-1">
        <p>
          <span className="text-green-300">whoami</span> — About me / introduction
        </p>
        <p>
          <span className="text-green-300">stats</span> — Developer stats & progress
        </p>
        <p>
          <span className="text-green-300">skills</span> — Technical skill matrix
        </p>
        <p>
          <span className="text-green-300">projects</span> — Projects with live links
        </p>
        <p>
          <span className="text-green-300">history</span> — View command history
        </p>
        <p>
          <span className="text-green-300">clear / cls</span> — Clear terminal output
        </p>
        <p>
          <span className="text-green-300">resume</span> — Open my resume in new tab
        </p>
        <p>
          <span className="text-green-300">linkedin</span> — Open LinkedIn profile
        </p>
        <p>
          <span className="text-green-300">github</span> — Open GitHub profile
        </p>
        <p>
          <span className="text-green-300">gfg</span> — Open GeeksforGeeks profile
        </p>
        <p>
          <span className="text-green-300">email</span> — Open default email client
        </p>
      </div>

      <div className="mt-3 pt-2 border-t border-green-800 text-gray-400">
        <p>• Press <span className="text-green-300">Enter</span> to execute command</p>
        <p>• Double-click background to change theme</p>
      </div>

    </div>
  );
};

export default Instructions;
