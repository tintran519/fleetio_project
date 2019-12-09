import React from 'react';

import Vehicle from '../components/vehicle';

class FavoritesContainer extends React.Component {
  vehicles () {
    const {vehicles, isFavorited} = this.props;
    console.log('vehicles: ', vehicles)

    if (vehicles.length < 1) return null;

    return vehicles.map(vehicle => {
      return <div className = 'col-6-md col-3-lg pt-3'>
        <Vehicle
          isFavorited   = {isFavorited}
          imgUrl        = {vehicle.imgUrl}
          name          = {vehicle.name}
          model         = {vehicle.model}
          make          = {vehicle.make}
          year          = {vehicle.year}
          licensePlate  = {vehicle.licensePlate}
          vin           = {vehicle.vin} />
      </div>
    })
  }

  render () {
    return (
      <div className = 'favorites-container'>
        <div className = 'row justify-content-center'>
          {this.vehicles()}
        </div>
      </div>
    )
  }
}

export default FavoritesContainer
