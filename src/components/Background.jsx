import React, { useEffect, useState } from 'react'
import { gifId, gifURL, gifExtension } from '../constants/constants';
import Terminal from './Terminal';
import Intro from './Intro';
import Instructions from './Instructions';

const Background = () => {
  const randomeIndex = Math.floor(Math.random() * gifId.length); 
  const [currentGifIndex, setCurrentGifIndex] = useState(gifId[randomeIndex]);

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
    <div onDoubleClick={handleChangeGif} className='relative h-screen w-screen overflow-hidden bg-black'>
      {/* Background GIF */}
      <img src={gifUrl} alt="gif" className='object-cover w-full h-full absolute inset-0' />

      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black/30'></div>

      {/* Terminal */}
      <div className="relative z-20 h-full flex justify-center items-start gap-3 p-5">
        <Terminal title={"--terminal"} window={false} >
          <Intro />
        </Terminal>
        <Terminal title={"--help"} window={true} >
          <Instructions />
        </Terminal>
      </div>

    </div>
  )
}

export default Background