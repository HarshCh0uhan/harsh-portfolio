import React, { useEffect, useState } from 'react'
import { gifId } from '../constants/constants';
import Terminal from './Terminal';

const Background = () => {
  const randomeIndex = Math.floor(Math.random() * gifId.length); 
    const [currentGifIndex, setCurrentGifIndex] = useState(gifId[randomeIndex]);
    const gifUrl = "https://www.lofi.cafe/gifs/" + currentGifIndex + ".gif";

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
      <div className="relative z-20 h-full flex justify-around items-start mt-[3%] ">
        <Terminal />

        {/* Instructions */}
        <div className='text-mono text-white text-md flex '>
          <div>
            <h1 className='font-bold'>Commands:</h1>
            <p>Double Click to change Background</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Background