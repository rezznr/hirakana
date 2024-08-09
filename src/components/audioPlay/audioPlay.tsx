"use client";

import { useEffect } from "react";
// import { music } from "@assets/audio/music.mp3";

const AutoPlayAudio = () => {
  useEffect(() => {
    const audio = new Audio("/assets/audio/music.mp3");
    audio.loop = true;
    audio.autoplay = true;

    // Attempt to play audio when the page is interacted with (helps with autoplay policies)
    const playAudio = async () => {
      try {
        await audio.play();
      } catch (err) {
        console.log("Auto-play was prevented, user interaction needed:", err);
      }
    };

    // Listen for user interaction
    document.addEventListener("click", playAudio, { once: true });

    // Attempt to auto-play immediately (some browsers may allow this)
    playAudio();

    // Clean up event listener when the component is unmounted
    return () => {
      document.removeEventListener("click", playAudio);
      audio.pause();
      audio.src = "";
    };
  }, []);

  return null;
};

export default AutoPlayAudio;
