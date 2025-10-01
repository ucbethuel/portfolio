import React from 'react'
import { FaCloud, FaChalkboardTeacher, FaGlobe, FaChartLine } from 'react-icons/fa'

const About = () => {
  const focusAreas = [
    { icon: FaCloud, title: 'Cloud Engineering' },
    { icon: FaChalkboardTeacher, title: 'Teaching & Mentorship' },
    { icon: FaGlobe, title: 'Web Development' },
    { icon: FaChartLine, title: 'Data Analysis & AI' }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>🚀 My Journey</h3>
            <p>
              I'm a passionate Cloud Engineer and Developer from Nigeria, currently mastering 
              <strong> Cloud Engineering</strong> through Nextwork.org. My journey involves exploring 
              <strong> Docker</strong> and DevOps tools as part of my cloud adventure.
            </p>
            
            <h3>💡 What I Love</h3>
            <ul className="about-list">
              <li>Building scalable apps with <strong>FastAPI, Django REST Framework, React, and Appwrite</strong></li>
              <li>Mentoring beginners in tech (Python, Web Dev, Data Analysis, FastAPI, AI, Linux)</li>
              <li>Creating educational content, webinars, and mentorship programs</li>
              <li>Shipping projects and helping others grow in tech</li>
            </ul>

            <h3>🎯 Current Focus</h3>
            <div className="focus-grid">
              {focusAreas.map((area, index) => (
                <div key={index} className="focus-item">
                  <area.icon />
                  <span>{area.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

