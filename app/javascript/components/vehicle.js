import React from 'react';

class Vehicle extends React.Component {
  render () {
    const {
      imgUrl,
      name,
      model,
      make,
      year,
      licensePlate,
      vin} = this.props;

    return (
      <div className = 'vehicle-container'>
        <div className = 'card'>
          <img src = {imgUrl} />
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
                {licensePlate}
              </div>
              <div>
                <span className = 'badge badge-secondary mr-1'>VIN:</span>
                {vin}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Vehicle;