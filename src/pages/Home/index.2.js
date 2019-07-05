/* eslint-disable jsx-a11y/href-no-hash */
/* eslint-disable no-trailing-spaces */
import React from 'react'

export default () => (
  <div className="has-text-centered">
    <section className="hero is-info">
      <div className="container">
        <h1 className="title">Home Page</h1>
        <h2 className="page-title">Test Doc Scan</h2> 
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
          <div className="card-content">
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
              <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
              <br />
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
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
