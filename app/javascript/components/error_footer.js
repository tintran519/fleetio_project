import React from 'react';

class ErrorFooter extends React.Component {
  render () {
    if (this.props.message.length < 1) { return null; }

    return (
      <div className = 'row justify-content-center text-danger'>
        {this.props.message}
      </div>
    )
  }
}

export default ErrorFooter
