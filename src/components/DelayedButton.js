import React, { Component } from 'react';

class DelayedButton extends Component {

 delayed = (event) => {
   event.persist();
   setTimeout(() => {
     this.props.onDelayedClick(event)
   }, this.props.delay)
 }

 render() {
   return (
     <button onClick={this.delayed}>
       DelayedClick
     </button>
   )
 }

}

export default DelayedButton;
