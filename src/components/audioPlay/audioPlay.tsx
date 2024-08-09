"use client";

import { useEffect } from "react";

const AutoPlayAudio = () => {
  useEffect(() => {
    const audio = new Audio("/assets/audio/music.mp3");
    audio.loop = true;

    const playAudio = async () => {
      try {
        await audio.play();
      } catch (err) {
        console.log("Auto-play was prevented, user interaction needed:", err);
      }
    };

    // Attempt to auto-play immediately
    playAudio();

    // Fallback for user interaction if autoplay is prevented
    document.addEventListener("click", playAudio, { once: true });
    document.addEventListener("keydown", playAudio, { once: true });

    // Clean up event listeners and audio element when the component is unmounted
    return () => {
      document.removeEventListener("click", playAudio);
      document.removeEventListener("keydown", playAudio);
      audio.pause();
      audio.src = "";
    };
  }, []);

  return null;
};

export default AutoPlayAudio;
