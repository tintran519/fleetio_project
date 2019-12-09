import React    from 'react';
import ReactDOM from 'react-dom';

import logo from '../images/fleetio_logo.png';

import Spinner     from '../components/spinner';
import Vehicle     from '../components/vehicle';
import ErrorFooter from '../components/error_footer';

class SearchContainer extends React.Component {
  buttonContent (text) {
    const {isLoading} = this.props.service;

    if (isLoading()) { return <Spinner /> };

    return text;
  }

  searchResult () {
    const {isFavorited} = this.props;
    const result        = this.props.service.getResult();

    if (Object.entries(result).length < 1) { return null; }

    return <div className = 'row justify-content-center'>
      <div className = 'col-6-md col-2-lg pt-3'>
        <Vehicle
          isFavorited   = {isFavorited}
          imageUrl      = {result.imageUrl}
          name          = {result.name}
          model         = {result.model}
          make          = {result.make}
          year          = {result.year}
          licensePlate  = {result.licensePlate}
          vin           = {result.vin} />
      </div>
    </div>
  }

  render () {
    const {
      onChange,
      getValue,
      fetchVehicle,
      isLoading,
      getError} = this.props.service;

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

        {this.searchResult()}

        <ErrorFooter message = {getError()} />
      </div>
    )
  }
}

export default SearchContainer;
