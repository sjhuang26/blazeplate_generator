import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 text-center mt-4'>
            <img src="https://raw.githubusercontent.com/blazeplate/blazeplate/master/img/logo.png" alt="Blazeplate" />
            <p className='lead'>Built with <a target='_blank' rel='noopener noreferrer' href='http://blazeplate.io'>blazeplate.io</a></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;

