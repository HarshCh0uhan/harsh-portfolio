import React, { useEffect, useState } from 'react'
import { gifId, gifURL, gifExtension } from '../utils/constants';
import Terminal from './Terminal';
import Intro from './Intro';
import Instructions from './Instructions';

const Background = () => {
  const randomeIndex = Math.floor(Math.random() * gifId.length); 
  const [currentGifIndex, setCurrentGifIndex] = useState(gifId[randomeIndex]);
  const [isTvOn, setIsTvOn] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Delay to show black screen first
    setTimeout(() => setIsTvOn(true), 100);
  }, []);

  const handleStartClick = () => {
    setShowContent(true);
  };

  const gifUrl = gifURL + currentGifIndex + gifExtension;

  const handleChangeGif = (event) => {
    const newIndex = Math.floor(Math.random() * gifId.length);
    setCurrentGifIndex(gifId[newIndex]);
  }

  const changeGif = () => {
    const newIndex = Math.floor(Math.random() * gifId.length);
    setCurrentGifIndex(gifId[newIndex]);
  }
  
  useEffect(() => {
    const interval = setInterval(changeGif, 5000)

    return () => clearInterval(interval);
  }, []);

  return (
    <div onDoubleClick={handleChangeGif} className={`relative h-screen w-screen overflow-hidden bg-black ${isTvOn ? 'tv-screen' : ''}`}>
      {/* TV Static Noise*/}
      <div className='tv-static'></div> 

      {/* Scanlines overlay */}
      {isTvOn && <div className='scanlines'></div>}

      {/* Background GIF */}
      <img src={gifUrl} alt="gif" className='object-cover w-full h-full absolute inset-0' />

      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black/30'></div>

      {/* Terminal */}
      <div className="relative z-20 h-full flex flex-col md:flex-row justify-center
      items-stretch gap-3 md:gap-[1%] p-2 md:p-[1%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Terminal title={"--terminal"} window={false} changeFlex={"flex-3"}>
          <Intro />
        </Terminal>
        <Terminal title={"--help"} window={true} changeFlex={"flex-1"}>
          <Instructions />
        </Terminal>
      </div>


    </div>
  )
}

export default Background