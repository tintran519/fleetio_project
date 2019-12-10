import React    from 'react';
import ReactDOM from 'react-dom';

import logo from '../images/fleetio_logo.png';

import Spinner     from '../components/spinner';
import Vehicle     from '../components/vehicle';
import ErrorFooter from '../components/error_footer';
import Button      from '../components/button';

class SearchContainer extends React.Component {
  searchResult () {
    const result                        = this.props.service.getResult();
    const {isFavorited, vehicleService} = this.props;

    if (Object.entries(result).length < 1) return null;

    return <div className = 'row justify-content-center'>
      <div className = 'col-6-md col-2-lg pt-3'>
        <Vehicle
          service         = {vehicleService}
          isFavorited     = {isFavorited}
          image_url       = {result.image_url}
          name            = {result.name}
          model           = {result.model}
          make            = {result.make}
          year            = {result.year}
          license_plate   = {result.license_plate}
          fuel_efficiency = {result.fuel_efficiency}
          vin             = {result.vin} />
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
            <Button
              classes   = {'btn btn-outline-success my-2 my-sm-0'}
              disabled  = {isLoading()}
              btnText   = {'Find Vehicle'}
              onClick   = {fetchVehicle} />
          </form>
        </div>

        {this.searchResult()}

        <ErrorFooter message = {getError()} />
      </div>
    )
  }
}

export default SearchContainer;
