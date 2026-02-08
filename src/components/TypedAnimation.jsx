import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'

function TypedAnimation() {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Problem Solver', 'Builder', 'Athlete', 'Robotics Enthusiast', 'Student'],
      typeSpeed: 200,
      backSpeed: 200,
      loop: true
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return <span className="auto-type" ref={el}></span>
}

export default TypedAnimation
