import React from "react";
import harshImg from "../assets/harsh.png";
import { useTypewriter } from "../hooks/useTypewriter";
import {
  resumeURL,
  linkedinURL,
  githubURL,
  gfgURL,
  introText,
} from "../utils/constants";
import TerminalInput from "./TerminalInput";
import TerminalHistory from "./TerminalHistory";

const Intro = () => {
  const whoami = useTypewriter("whoami", 60, true);

  const line1 = useTypewriter(introText[0], 25, whoami.done);
  const line2 = useTypewriter(introText[1], 25, line1.done);
  const line3 = useTypewriter(introText[2], 25, line2.done);
  const line4 = useTypewriter(introText[3], 25, line3.done);

  const stats = useTypewriter("stats", 60, line4.done);

  const cursor = (
    <span className="inline-block w-2 h-4 bg-green-500 ml-1 animate-pulse" />
  );

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Image */}
        <img
          src={harshImg}
          alt="Harsh Chouhan"
          className="w-32 h-32 sm:w-[30%] sm:h-auto object-contain"
        />

        {/* Content */}
        <div className="flex flex-col gap-3 font-mono text-sm sm:text-base">

          {/* whoami command */}
          <div className="text-green-400 font-bold">
            harshchouhan:$ <span className="underline">{whoami.displayed}</span>
            {!whoami.done && cursor}
          </div>

          {/* Intro output */}
          {whoami.done && (
            <div className="flex flex-col gap-2 text-gray-200">
              <p>Hey, I'm Harsh</p>
              <p>
                {line1.displayed}
                {!line1.done && cursor}
              </p>
              {line1.done && (
                <p>
                  {line2.displayed}
                  {!line2.done && cursor}
                </p>
              )}
              {line2.done && (
                <p>
                  {line3.displayed}
                  {!line3.done && cursor}
                </p>
              )}
              {line3.done && (
                <p>
                  {line4.displayed}
                  {!line4.done && cursor}
                </p>
              )}
            </div>
          )}

          {/* Links */}
          {line4.done && (
            <div className="flex flex-wrap justify-evenly gap-3 text-sm text-gray-300">
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
          )}

          {/* stats command */}
          {line4.done && (
            <>
              <div className="text-green-400 font-bold mt-4">
                harshchouhan:$ <span className="underline">{stats.displayed}</span>
                {!stats.done && cursor}
              </div>

              {stats.done && (
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
              )}

            </>
          )}
        </div>
      </div>

      {/* Terminal */}
      <TerminalHistory />
      <TerminalInput />
    </div>
  );
};

export default Intro;
