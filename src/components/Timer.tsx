import { useState, useEffect } from 'react'
import './Timer.css'

type Mode = 'work' | 'break'

export function Timer() {
  const [seconds, setSeconds] = useState(30)
  const [isRunning, setIsRunning] = useState(false)
  const [mode, setMode] = useState<Mode>('work')
  const [isComplete, setIsComplete] = useState(false)
  const [resetCountdown, setResetCountdown] = useState(0)
  const [sessionCount, setSessionCount] = useState(0)

  // Format seconds as MM:SS
  const formatTime = (secs: number): string => {
    const mins = Math.floor(secs / 60)
    const remainingSecs = secs % 60
    return `${String(mins).padStart(2, '0')}:${String(remainingSecs).padStart(2, '0')}`
  }

  // Main countdown effect
  useEffect(() => {
    if (!isRunning || seconds <= 0) return

    const interval = setInterval(() => {
      setSeconds(prev => {
        if (prev <= 1) {
          setIsRunning(false)
          setIsComplete(true)
          setResetCountdown(30)
          setSessionCount(count => count + 1)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isRunning, seconds])

  // Reset countdown effect (runs when timer completes)
  useEffect(() => {
    if (!isComplete || resetCountdown <= 0) return

    const interval = setInterval(() => {
      setResetCountdown(prev => {
        if (prev <= 1) {
          // Auto-cycle to next session
          setMode(currentMode => currentMode === 'work' ? 'break' : 'work')
          setSeconds(30)
          setIsComplete(false)
          setIsRunning(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isComplete, resetCountdown])

  const handleStart = () => setIsRunning(true)
  const handleStop = () => setIsRunning(false)
  const handleReset = () => {
    setIsRunning(false)
    setSeconds(30)
    setIsComplete(false)
    setResetCountdown(0)
  }

  const handleModeChange = (newMode: Mode) => {
    setMode(newMode)
    setIsRunning(false)
    setSeconds(30)
    setIsComplete(false)
    setResetCountdown(0)
  }

  return (
    <div className={`timer ${mode} ${isComplete ? 'complete' : ''}`}>
      <div className="session-counter">
        Sessions completed: {sessionCount}
      </div>

      <div className="mode-buttons">
        <button
          className={mode === 'work' ? 'active' : ''}
          onClick={() => handleModeChange('work')}
        >
          Work
        </button>
        <button
          className={mode === 'break' ? 'active' : ''}
          onClick={() => handleModeChange('break')}
        >
          Break
        </button>
      </div>

      <div className="timer-display">
        {formatTime(seconds)}
      </div>

      {isComplete && (
        <div className="completion-celebration">
          <img
            src="https://media.giphy.com/media/Vuw9m5wXviFIQ/giphy.gif"
            alt="Rick Astley - Never Gonna Give You Up"
            className="rick-astley"
          />
          <div className="reset-countdown">
            Next session in: {resetCountdown}s
          </div>
        </div>
      )}

      <div className="control-buttons">
        <button onClick={handleStart} disabled={isRunning || (seconds === 0 && !isComplete)}>
          Start
        </button>
        <button onClick={handleStop} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  )
}
