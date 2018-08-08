import React, { Component } from 'react'
import axios from 'axios'

import Loader from '../components/Loader'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: true,
      email: '',
      password: ''
    }
    this.handleLogin = this.handleLogin.bind(this)
    this.updateEmailValue = this.updateEmailValue.bind(this)
    this.updatePasswordValue = this.updatePasswordValue.bind(this)
  }

  handleLogin() {
    this.setState({
      isLoaded: false
    })
    axios.post('/api/auth/login', {
      email: this.state.email,
      password: this.state.password
    }).then((response) => {
      this.setState({
        isLoaded: true
      })
    })
  }

  updateEmailValue(e) {
    this.setState({
      email: e.target.value
    })
  }

  updatePasswordValue(e) {
    this.setState({
      password: e.target.value
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
                    <input className="form-control" placeholder="E-mail" type="text" value={this.state.email} onChange={this.updateEmailValue} />
                  </div>

                  <div className="form-group">
                    <input className="form-control" placeholder="Password" type="password" value={this.state.password} onChange={this.updatePasswordValue} />
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

