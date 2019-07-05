/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from 'react'
import Routing from './routes'

class App extends Component {
  render() {
    return (
      <div className="my-app">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="">
                <img src={process.env.PUBLIC_URL + '/images/LOGO.png'} alt="PRINCE LOGO" />
                <p>
                  &nbsp;Doc Scan
                </p>
              </a>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <div className="navbar-item field">
                  <p className="control has-icons-right">
                    <input className="input is-focused" type="search" placeholder="Search..."/>
                    <span className="icon is-small is-right">
                      <i className="fa fa-search"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <Routing />
      </div>
    )
  }
}

export default App
