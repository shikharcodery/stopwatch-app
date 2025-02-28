import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const handleRunning = () => {
    setRunning(false);
    setTime(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white font-sans">
      <h1 className="text-5xl font-extrabold mb-12 tracking-wide">Stopwatch</h1>
      <div className="flex space-x-4 bg-black/40 rounded-xl p-6 text-4xl font-mono shadow-lg">
        <span className="w-20 text-center">{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</span>:
        <span className="w-20 text-center">{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>:
        <span className="w-20 text-center">{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="mt-10 space-x-6">
        <button
          onClick={() => setRunning(true)}
          className="cursor-pointer px-8 py-3 bg-green-600 hover:bg-green-500 text-white font-medium rounded-lg shadow-md transform transition hover:scale-105"
        >
          Start
        </button>
        <button
          onClick={() => setRunning(false)}
          className="cursor-pointer px-8 py-3 bg-red-600 hover:bg-red-500 text-white font-medium rounded-lg shadow-md transform transition hover:scale-105"
        >
          Stop
        </button>
        <button
          onClick={handleRunning}
          className="cursor-pointer px-8 py-3 bg-yellow-600 hover:bg-yellow-500 text-white font-medium rounded-lg shadow-md transform transition hover:scale-105"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
