import React, { useEffect, useState } from "react";
import { FaRegCirclePause } from "react-icons/fa6";
import { FaRegPlayCircle } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";

const FirstTimer = () => {
  const [seconds, setSeconds] = useState(25 * 60); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [sectionsCompleted, setSectionsCompleted] = useState(0);

  //the useEffect hook is used to render components for the first time and also after every subsequent re-render (when state or prope change)
  // we control the useEffect runs by providing a dependencies array as the second argument, the effect will only re-run if one of the dependencies changes

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    if (seconds === 0) {
      clearInterval(interval);
      if (!isBreak) {
        setIsBreak(true);
        setSeconds(5 * 60); // 5 minutes break
      } else {
        setIsBreak(false);
        setSeconds(25 * 60); // Reset to 25 minutes
        setSectionsCompleted(sectionsCompleted + 1);
      }
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, isBreak, sectionsCompleted]);

  const handlePlayPause = () => {
    setIsActive(!isActive);
  };

  const handleRestart = () => {
    setIsActive(false);
    setIsBreak(false);
    setSeconds(25 * 60);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}`;
  };

  return (
    <div>
      <div className="justify-center items-center flex">
        <p className="text-teal-600 text-5xl tracking-widest">
          {isBreak ? "Short Break" : "Focus"}
        </p>
      </div>
      <div className="flex gap-x-4 py-0">
        <p className="text-teal-600 text-[200px] font-semibold">
          {formatTime(seconds)}
        </p>
      </div>
      <div className="flex items-center justify-center gap-x-16">
        <button>
          <VscDebugRestart
            className="text-teal-600 text-5xl"
            onClick={handleRestart}
          />
        </button>
        <button onClick={handlePlayPause}>
          {isActive ? (
            <FaRegCirclePause className="text-teal-600 text-5xl" />
          ) : (
            <FaRegPlayCircle className="text-teal-600 text-5xl" />
          )}
        </button>
        <div className="px-8 py-3 bg-teal-600 rounded-full text-white text-lg">
          Sections: {sectionsCompleted}
        </div>
      </div>
    </div>
  );
};

export default FirstTimer;
