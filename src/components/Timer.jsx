/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'

export default function Timer({ maxTime }) {
  const [time, setTime] = useState(1)

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTime((prevTime) => (prevTime === maxTime ? 1 : prevTime + 1))
    }, 1000)

    return () => clearInterval(timerInterval)
  }, [maxTime])

  return <p className="text-lg font-medium">Timer - {time}s</p>
}
