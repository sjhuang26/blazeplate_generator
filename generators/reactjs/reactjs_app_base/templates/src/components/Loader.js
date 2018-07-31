import React, { Component } from 'react'

class Loader extends Component {
  render() {
    if (this.props.isLoaded) {
      return this.props.children
    } else {
      return (
        <i className='fa fa-3x fa-spin fa-spinner'></i>
      )
    }
  }
}

export default Loader;

