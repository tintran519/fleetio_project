import axios from 'axios';

class VehicleService {
  constructor (component) {
    this.component = component;

    this.component.state.vehicle = {
      loading: false,
      error: '',
    }
  }

  getError = () => {
    return this.component.state.vehicle.error;
  }

  isLoading = () => {
    return this.component.state.vehicle.loading;
  }

  deleteVehicle = (e) => {
    this.setVehicle({loading: true, error: ''});

    const csrfToken = document.querySelector('[name=csrf-token]').content;
    const data      = {vin: e.target.id};

    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

    return axios({
      method: 'delete',
      url: '/user/user_vehicles',
      data: data
    }).then(this.handleSuccess)
    .catch(this.handleError);
  }

  addVehicle = () => {
    this.setVehicle({loading: true, error: ''});

    const csrfToken = document.querySelector('[name=csrf-token]').content;
    const data      = {...this.component.state.search.result};

    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

    return axios({
      method: 'post',
      url: '/user/user_vehicles',
      data: data
    }).then(this.handleSuccess)
    .catch(this.handleError);
  }

  setVehicle = (props) => {
    this.component.setState(state => {
      return {
        vehicle: {
          ...state.vehicle,
          ...props,
        },
      };
    });
  }

  handleSuccess = (response) => {
    this.component.userService.setUser(response.data);
    this.setVehicle({loading: false});
  }

  handleError = (errorStatus) => {
    let message = 'Something went wrong. Please try again later.';

    this.setVehicle({loading: false, error: message});
  }
}

export default VehicleService;
