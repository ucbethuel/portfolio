import React, { useEffect, useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'

const Hero = () => {
  const [typedText, setTypedText] = useState('')
  const fullText = "Hi there, I'm Uchenna Bethel Orji 👋"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="highlight">{typedText}</span>
            </h1>
            <p className="hero-subtitle">
              <span className="emoji">🌍</span> From Nigeria | 
              <span className="emoji">☁️</span> Aspiring Cloud Engineer | 
              <span className="emoji">💻</span> Developer | 
              <span className="emoji">🎓</span> Tech Mentor
            </p>
            <p className="hero-description">
              Passionate about building scalable applications and mentoring beginners in tech. 
              Currently mastering Cloud Engineering through Nextwork.org Cloud Engineering projects while exploring Docker & DevOps tools.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-avatar">
                <FaUserCircle />
              </div>
              <div className="profile-info">
                <h3>Cloud Engineer</h3>
                <p>Building the future, one container at a time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

