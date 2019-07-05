/* eslint-disable jsx-a11y/href-no-hash */
/* eslint-disable no-trailing-spaces */
import React from 'react'

export default () => (
  <div className="has-text-centered">
    <div className="columns is-gapless is-multiline is-mobile is-0">
      <div className="column is-3">
        <section className="">
          <img src={process.env.PUBLIC_URL + '/images/LOGO_PITSANUVEJ_HOSPITAL-03.jpg'} alt="PRINCE LOGO" />
          <h1 className="title">Doc Scan Page</h1>
          <h2 className="page-title">Test Doc Scan</h2> 
          <div className="control">
            <input className="input is-hovered" type="text" placeholder="Hovered input" />
          </div>
        </section>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              Component
            </p>
          </header>  
          <input className="input" type="text" placeholder="HN input" />
          <footer className="card-footer">
            <a href="#" className="card-footer-item">Save</a>
            <a href="#" className="card-footer-item">Edit</a>
            <a href="#" className="card-footer-item">Delete</a>
          </footer>
        </div>
      </div>
      <div className="column is-9">
        <section className="hero is-info">
          <h1 className="title">Doc Scan Page</h1>
          <h2 className="page-title">Test Doc Scan</h2> 
        </section>
      </div> 
    </div>
  </div>
)
