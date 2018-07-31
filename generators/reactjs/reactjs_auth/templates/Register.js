import React, { Component } from 'react'
import axios from 'axios'

import Loader from '../components/Loader'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: true,
      email: '',
      username: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateEmail = this.updateEmail.bind(this)
    this.updateUsername = this.updateUsername.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
    this.updatePasswordVerify = this.updatePasswordVerify.bind(this)
  }

  handleSubmit() {
    this.setState({
      isLoaded: false
    })
    axios.post('/api/auth/register', {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    }).then((response) => {
      this.setState({
        isLoaded: true
      })
    })
  }

  updateEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  updateUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  updatePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  updatePasswordVerify(e) {
    this.setState({
      passwordVerify: e.target.value
    })
  }

  render() {
    return (
      <div className="container h-100">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-4">
            <Loader isLoaded={this.state.isLoaded}>
              <div className="card card-body">
                <h4 className="card-title">Register</h4>
                <form>
                  <fieldset>
                    <div className="form-group">
                      <label>Email</label>
                      <input className="form-control" label='Email' placeholder='Email' value={this.state.email} onChange={this.updateEmail}/>
                    </div>
                    <div className="form-group">
                      <label>Username</label>
                      <input className="form-control" label='Username' placeholder='Username' value={this.state.username} onChange={this.updateUsername}/>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input className="form-control" label='Password' placeholder='Password' type='password' value={this.state.password} onChange={this.updatePassword}/>
                    </div>
                    <div className="form-group">
                      <label>Confirm Password</label>
                      <input className="form-control" label='Confirm Password' placeholder='Confirm Password' type='password' value={this.state.passwordVerify} onChange={this.updatePasswordVerify}/>
                    </div>

                    <button className="btn btn-outline-success btn-block" onClick={this.handleSubmit}>
                      <i className="fa fa-check mr-2"></i>
                      Register
                    </button>
                  </fieldset>
                </form>
              </div>
            </Loader>
          </div>
        </div>
      </div>
    )
  }
}

export default Register

