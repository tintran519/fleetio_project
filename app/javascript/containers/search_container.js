import React    from 'react';
import ReactDOM from 'react-dom';

import logo from '../images/fleetio_logo.png';

class SearchContainer extends React.Component {
  render () {
    return (
      <div className = 'search-container'>
        <div className = 'row justify-content-center'>
          <img src = {logo} />
        </div>

        <div className = 'row justify-content-center'>
          <form className = 'form-inline my-2 my-lg-0'>
            <input
              className   = 'form-control mr-sm-2'
              type        = 'search'
              placeholder = 'Search for a VIN'
              aria-label  = 'Search' />
            <button
              className = 'btn btn-outline-success my-2 my-sm-0'
              type      = 'submit'>
              Search
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default SearchContainer;
