import React    from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render () {
    const {
      collapseClass,
      getCollapseNav,
      toggleCollapseNav} = this.props.service;

    return (
      <nav className = 'navbar navbar-expand-lg navbar-light bg-light'>
        <Link to = '/'>
          <div className = 'navbar-brand'>
            Fleetio VIN Lookup
          </div>
        </Link>

        <button
          className = 'navbar-toggler'
          onClick   = {toggleCollapseNav}>
          <span className = 'navbar-toggler-icon'></span>
        </button>

        <div className = {collapseClass()}>
          <ul className = 'navbar-nav mr-auto'>
            <li className = 'nav-item active'>
              <Link to = '/favorites'>
                <div className = 'nav-link'>Favorites</div>
              </Link>
            </li>
          </ul>

          <div
            className = 'sign-out navbar-text'
            onClick   = {this.props.signOut}>
            Sign Out
          </div>
        </div>

      </nav>
    )
  }
}

export default Navbar;
