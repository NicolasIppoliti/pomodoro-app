import React, { useState, useEffect } from 'react';
import SpotifyPlaylist from './components/SpotifyPlaylist';
import './App.css';

function Pomodoro() {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [session, setSession] = useState('Work');

  useEffect(() => {
    let interval;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setSession(session === 'Work' ? 'Break' : 'Work');
      setTime(session === 'Work' ? 5 * 60 : 25 * 60);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time, session]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSession('Work');
    setTime(25 * 60);
  };

  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-4 text-3xl font-bold">{session} Session</h1>
      <div className="mb-4 text-5xl font-bold">{formatTime(time)}</div>
      <div className="flex gap-4">
        <button
          className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
          onClick={toggleTimer}
        >
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button
          className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
      
      <div className="w-full mt-8">
        <SpotifyPlaylist />
      </div>
    </div>
  );
}

export default Pomodoro;
