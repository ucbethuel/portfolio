import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/ucbethuel' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/ucbethuel' },
    { icon: FaTwitter, href: 'https://twitter.com/ucbethuel' }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2025 Uchenna Bethel Orji. Built with ❤️ and React.</p>
          <div className="footer-links">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Visit ${link.icon.name} profile`}
              >
                <link.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

