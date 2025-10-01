import React, { useState, useEffect } from 'react'

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.body.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setScrollProgress(scrollPercent)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <div 
      className="scroll-indicator"
      style={{ transform: `scaleX(${scrollProgress / 100})` }}
    />
  )
}

export default ScrollProgress

