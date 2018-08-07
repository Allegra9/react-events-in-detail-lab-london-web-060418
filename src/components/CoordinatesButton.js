import React, { Component } from 'react';

class CoordinatesButton extends Component {

  render() {
    return (
      <button onClick={e => this.props.onReceiveCoordinates([e.clientX, e.clientY])}>
        getCoordinates
      </button>
    )
  }

}

export default CoordinatesButton;
