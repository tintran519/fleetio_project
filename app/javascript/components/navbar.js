import React from 'react';

class Navbar extends React.Component {
  render () {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Fleetio VIN Lookup
        </a>

        <span>{this.props.user.username}</span>
      </nav>
    )
  }
}

export default Navbar;
