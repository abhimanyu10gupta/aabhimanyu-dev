"use client"
import React, { useEffect, useState } from "react";


const LiveClock = () => {
    const [date, setDate] = useState(new Date());

    let timerID = setInterval(() => tick(), 1000);

    const tick = () => {
        setDate(new Date());
    }
    useEffect(() => {
        timerID = setInterval(() => tick(), 1000);
    }, [])

  return (
    <div>{date.toLocaleTimeString()}</div>
  )
}

export default LiveClock