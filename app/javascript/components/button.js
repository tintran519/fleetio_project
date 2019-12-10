import React from 'react';

import Spinner from './spinner';

class Button extends React.Component {
  buttonContent (text) {
    const {disabled} = this.props;

    if (disabled) { return <Spinner /> };

    return text;
  }

  render () {
    const {disabled, classes, onClick, btnText, id} = this.props;

    return (
      <button
        id        = {id}
        className = {classes}
        disabled  = {disabled}
        onClick   = {onClick}>
        {this.buttonContent(btnText)}
      </button>
    )
  }
}

export default Button;
