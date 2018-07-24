import React, { Component } from 'react'
import axios from 'axios'

import Loader from './Loader'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: true
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    this.setState({
      isLoaded: false
    })
    axios.post('/api/auth/register').then((response) => {
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
                <h4 className="card-title">Register</h4>
                <form>
                  <fieldset>
                    <div className="form-group">
                      <label>Name</label>
                      <input className="form-control" label='Name' placeholder='Name'/>
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input className="form-control" label='Email' placeholder='Email'/>
                    </div>
                    <div className="form-group">
                      <label>Username</label>
                      <input className="form-control" label='Username' placeholder='Username'/>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input className="form-control" label='Password' placeholder='Password' type='password'/>
                    </div>
                    <div className="form-group">
                      <label>Confirm Password</label>
                      <input className="form-control" label='Confirm Password' placeholder='Confirm Password' type='password'/>
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

