/* eslint-disable jsx-a11y/href-no-hash */
/* eslint-disable no-trailing-spaces */
import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class Home extends Component {
  btnLink = () => {
    // Navigation.push('/gg')
    this.props.history.push('/some/path')
    // this.context.router.transitionTo('/')
    // <Redirect push to="/about" />
    // window.location.href = 'homes'
    // window.location.pathname = 'h'
    // console.log(77)
    
    // this.route("about")
  }
  render() {
    return (
      <div className="has-text-centered">
        <section className="hero is-info">
          <div className="container">
            <h1 className="title" onClick={ () => this.btnLink() }>Welcome To Home Page</h1>
            <h2 className="page-title">Test Doc Scan</h2> 
            <p>
              <Link to="/taniarascia">taniarascia</Link> on GitHub.
            </p>
          </div>
        </section>
      </div>

    )
  }
}

export default Home
