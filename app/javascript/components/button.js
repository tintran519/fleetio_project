import React from 'react';

import Spinner from './spinner';

class Button extends React.Component {
  buttonContent (text) {
    const {disabled} = this.props;

    if (disabled) { return <Spinner /> };

    return text;
  }

  render () {
    const {disabled, classes, onClick, btnText} = this.props;

    return (
      <button
        className = {classes}
        disabled  = {disabled}
        onClick   = {onClick}>
        {this.buttonContent(btnText)}
      </button>
    )
  }
}

export default Button;
