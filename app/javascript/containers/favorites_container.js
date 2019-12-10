import React from 'react';

import Vehicle from '../components/vehicle';

class FavoritesContainer extends React.Component {
  vehicles () {
    const {vehicles, isFavorited, vehicleService} = this.props;

    if (vehicles.length < 1) return null;

    return vehicles.map(vehicle => {
      return <div key = {vehicle.id} className = 'col-6-md col-3-lg px-3'>
        <Vehicle
          service         = {vehicleService}
          isFavorited     = {isFavorited}
          image_url       = {vehicle.image_url}
          name            = {vehicle.name}
          model           = {vehicle.model}
          make            = {vehicle.make}
          year            = {vehicle.year}
          license_plate   = {vehicle.license_plate}
          fuel_efficiency = {vehicle.fuel_efficiency}
          vin             = {vehicle.vin} />
      </div>
    })
  }

  render () {
    return (
      <div className = 'favorites-container container-fluid'>
        <div className = 'row justify-content-start py-3'>
          {this.vehicles()}
        </div>
      </div>
    )
  }
}

export default FavoritesContainer
