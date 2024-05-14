import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"

const Timer = () => {
    const navigate = useNavigate()

    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    const deadline = new Date(Date.now() + 15 * 60000)

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now()
        setMinutes(Math.floor((time / 1000 / 60) % 60))
        setSeconds(Math.floor((time / 1000) % 60))
    }

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000)
        return () => clearInterval(interval)
    }, [])

    if(minutes == 0 && seconds == 0) navigate("/")

    return (
        <div className="timer">
            <p>{minutes < 10 ? "0" + minutes : minutes}</p>
            <p className="text">Minutos</p>
            <p></p>
            <p> {seconds < 10 ? "0" + seconds : seconds}</p>
            <p className="text">Segundos</p>
        </div>
    )
}
export default Timer