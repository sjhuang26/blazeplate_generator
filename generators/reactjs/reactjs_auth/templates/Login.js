import React, { Component } from 'react'
import axios from 'axios'

import Loader from './Loader'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: true
    }
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin() {
    this.setState({
      isLoaded: false
    })
    axios.post('/api/auth/login').then((response) => {
      this.setState({
        isLoaded: true
      })
    })
  }

  render() {
    return (
      <div className="container h-100">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-4">
            <Loader isLoaded={this.state.isLoaded}>
              <div className="card card-body">
                <h4 className="card-title">Sign In</h4>
                <fieldset>

                  <div className="form-group">
                    <input className="form-control" placeholder="E-mail" type="text" />
                  </div>

                  <div className="form-group">
                    <input className="form-control" placeholder="Password" type="password" value="" />
                  </div>

                  <button className="btn btn-outline-success btn-block" onClick={this.handleLogin}>
                    <i className="fa fa-check mr-2"></i>
                    Login
                  </button>

                </fieldset>
              </div>
            </Loader>
          </div>
        </div>
      </div>
    )
  }
}

export default Login

