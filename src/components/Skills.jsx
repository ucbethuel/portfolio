import React from 'react'
import { FaCloud, FaCode, FaPalette, FaBrain } from 'react-icons/fa'

const Skills = () => {
  const skillCategories = [
    {
      icon: FaCloud,
      title: 'Cloud & DevOps',
      skills: ['Docker', 'Cloud Engineering', 'DevOps', 'Containerization']
    },
    {
      icon: FaCode,
      title: 'Backend Development',
      skills: ['Python', 'FastAPI', 'Django REST', 'Linux']
    },
    {
      icon: FaPalette,
      title: 'Frontend Development',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'Appwrite']
    },
    {
      icon: FaBrain,
      title: 'Data & AI',
      skills: ['Scikit-learn', 'Data Analysis', 'Python', 'AI/ML']
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>
                <category.icon />
                {category.title}
              </h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

