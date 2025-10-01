import React from 'react'
import { FaGithub, FaExternalLinkAlt, FaGraduationCap } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'Cloud Engineering Portfolio',
      description: 'Modern portfolio website showcasing cloud engineering skills and projects. Built with modern web technologies and React.',
      github: 'https://github.com/ucbethuel/',
      live: '#',
      tech: ['HTML/CSS', 'JavaScript', 'React']
    },
    {
      title: 'FastAPI Web Applications',
      description: 'Scalable web applications built with FastAPI, featuring RESTful APIs, authentication, and modern development practices.',
      github: '#',
      live: null,
      tech: ['FastAPI', 'Python', 'Docker']
    },
    {
      title: 'React Frontend Applications',
      description: 'Modern React applications with responsive design, state management, and integration with backend APIs.',
      github: '#',
      live: null,
      tech: ['React', 'JavaScript', 'CSS3']
    },
    {
      title: 'Mentorship Programs',
      description: 'Educational content and mentorship programs for beginners in tech, covering Python, Web Development, Data Analysis, and AI.',
      github: '#',
      live: null,
      tech: ['Teaching', 'Mentorship', 'Education']
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub />
                  </a>
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                  {!project.live && project.title === 'Mentorship Programs' && (
                    <span className="project-link">
                      <FaGraduationCap />
                    </span>
                  )}
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
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

export default Projects

