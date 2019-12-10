import axios from 'axios';

class UserService {
  constructor (component) {
    this.component = component;

    this.component.state.user = {
      error: '',
    };
  }

  getUser = () => {
    return this.component.state.user;
  }

  getVehicles = () => {
    return this.component.state.user.vehicles;
  }

  isFavorited = (vin) => {
    return this.getUser().vehicles.find(vehicle => vin == vehicle.vin);
  }

  fetchUser = () => {
    return axios({
      method: 'get',
      url: '/user',
    }).then(response => {
      this.setUser(response.data.user);
    })
    .catch(error => {console.log('fetchUser error: ', error)});
  }

  signOut = () => {
    const csrfToken = document.querySelector('[name=csrf-token]').content;

    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

    return axios({
      method: 'delete',
      url: '/users/sign_out.json',
    }).then(response => window.location.href = '/users/sign_in')
    .catch(error => console.log('signOut error: ', error));
  }

  setUser = (props) => {
    this.component.setState(state => {
      return {
        user: {
          ...state.user,
          ...props,
        },
      };
    });
  }
}

export default UserService;
