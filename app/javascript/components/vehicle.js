import React from 'react';

import Button      from './button';
import ErrorFooter from './error_footer';

class Vehicle extends React.Component {
  footer (vin) {
    const {isFavorited, service} = this.props;

    if (this.props.isFavorited(vin)) {
      return <div className = 'card-footer text-center'>
        <Button
          disabled  = {service.isLoading()}
          classes   = 'btn btn-danger'
          btnText   = 'Remove from Favorites'
          onClick   = {service.addVehicle} />
      </div>
    }

    return <div className = 'card-footer text-center'>
      <Button
        disabled  = {service.isLoading()}
        classes   = 'btn btn-primary'
        btnText   = 'Add to Favorites'
        onClick   = {service.addVehicle} />
    </div>
  }

  render () {
    const {
      service,
      image_url,
      name,
      model,
      make,
      year,
      license_plate,
      vin} = this.props;

    return (
      <div className = 'vehicle-container'>
        <div className = 'card'>
          <img src = {image_url} />
          <div className = 'card-body'>
            <h5 className = 'card-title text-center'>
              {name}
            </h5>

            <div className = 'details'>
              <div>
                <span className = 'badge badge-secondary mr-1'>Model:</span>
                {model}
              </div>
              <div>
                <span className = 'badge badge-secondary mr-1'>Make:</span>
                {make}
              </div>
              <div>
                <span className = 'badge badge-secondary mr-1'>Year:</span>
                {year}
              </div>
              <div>
                <span className = 'badge badge-secondary mr-1'>License Plate:</span>
                {license_plate}
              </div>
              <div>
                <span className = 'badge badge-secondary mr-1'>VIN:</span>
                {vin}
              </div>
            </div>
          </div>

          <ErrorFooter message = {service.getError()} />

          {this.footer(vin)}

        </div>
      </div>
    )
  }
}

export default Vehicle;
