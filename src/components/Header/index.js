import React from 'react'
import Link from 'gatsby-link'

import './index.css'

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0, display: 'inline' }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Fady Sadek
        </Link>
      </h1>
      <nav
        style={{
          color: 'white',
          lineHeight: '1.1',
          marginTop: '10px',
          display: 'inline-block',
          float: 'right',
          margin: '10 0 0 0',
        }}
      >
        <Link to="/blog" className="nav-item-link" style={{ color: 'white', textDecoration: 'none' }}>
          <h2 className="nav-item">Blog</h2>
        </Link>
        <Link to="/projects" className="nav-item-link" style={{ color: 'white', textDecoration: 'none' }}>
          <h2 className="nav-item">Projects</h2>
        </Link>
        <Link to="/about" className="nav-item-link" style={{ color: 'white', textDecoration: 'none' }}>
          <h2 className="nav-item">About</h2>
        </Link>
        <a href="https://github.com/FadySamirSadek" className="nav-item-link" style={{ color: 'white', textDecoration: 'none' }}>
          <h2 className="nav-item">Github</h2>
        </a>
        <a href="https://twitter.com/fadysamirsadek" className="nav-item-link" style={{ color: 'white', textDecoration: 'none' }}>
          <h2 className="nav-item">Twitter</h2>
        </a>
        <Link to="/contact" className="nav-item-link" style={{ color: 'white', textDecoration: 'none' }}>
          <h2 className="nav-item">Contact</h2>
        </Link>
      </nav>
    </div>
  </div>
)

export default Header
