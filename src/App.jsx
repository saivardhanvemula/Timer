import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [sec, setSec] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  let interval;

  function reset() {
    setSec(0);
    setIsRunning(false);
  }

  function start() {
    setIsRunning(true);
  }

  function pause() {
    setIsRunning(false);
  }

  useEffect(() => {
    if (isRunning) {
      interval = setInterval(() => {
        setSec(prevSec => prevSec + 1);
      }, 1000);
    } else if (!isRunning && sec !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, sec]);

  return (
    <>
      <h1>{sec} s</h1>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
