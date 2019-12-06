import React    from 'react';
import ReactDOM from 'react-dom';

import logo from '../images/fleetio_logo.png';

import Spinner from '../components/spinner';

class SearchContainer extends React.Component {
  buttonContent (text) {
    const {isLoading} = this.props.service;

    if (isLoading()) { return <Spinner /> };

    return text;
  }

  render () {
    const {onChange, getValue, fetchVehicle, isLoading} = this.props.service;

    return (
      <div className = 'search-container'>
        <div className = 'row justify-content-center'>
          <img src = {logo} />
        </div>

        <div className = 'row justify-content-center'>
          <form className = 'form-inline my-2 my-lg-0'>
            <input
              className   = 'form-control mr-sm-2'
              disabled    = {isLoading()}
              type        = 'search'
              onChange    = {onChange}
              value       = {getValue()}
              placeholder = 'Search for a VIN'
              aria-label  = 'Search' />
            <button
              className = 'btn btn-outline-success my-2 my-sm-0'
              disabled  = {isLoading()}
              onClick   = {fetchVehicle}
              type      = 'submit'>
              {this.buttonContent('Find Vehicle')}
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default SearchContainer;
