import React from 'react'
import { useState, useEffect } from 'react';

export const useTypewriter = (text, speed = 25, enabled = true) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  
  useEffect(() => {
    if(!enabled) return;

    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i+1));
      i++;

      if(i == text.length){
        clearInterval(interval);
        setDone(true);
      }
    }, speed);
  
    return () => clearInterval(interval);
  }, [text, speed, enabled]);

  return {displayed, done};
}