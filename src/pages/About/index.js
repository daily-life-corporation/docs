import React from 'react'

export default () => (
  <div className="has-text-centered">
    <section className="hero is-danger">
      <div className="container">
        <h1 className="title">About</h1>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              Component
            </p>
            <a href="#" className="card-header-icon" aria-label="more options">
              <span className="icon">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </a>
          </header>
          <footer className="card-footer">
            <a href="#" className="card-footer-item">Save</a>
            <a href="#" className="card-footer-item">Edit</a>
            <a href="#" className="card-footer-item">Delete</a>
          </footer>
        </div>
      </div>
    </section>
  </div>
)
