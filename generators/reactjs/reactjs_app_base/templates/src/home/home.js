import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 text-center mt-4'>
            <img width="30%" src="https://github.com/codotype/codotype-branding/blob/master/codotype-02.png?raw=true" alt="codotype.io" />
            <p className='lead'>Built with <a target='_blank' rel='noopener noreferrer' href='http://codotype.io'>codotype.io</a></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;

