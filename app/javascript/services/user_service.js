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

  fetchUser = () => {
    return axios({
      method: 'get',
      url: '/user',
    }).then(response => {
      this.setUser(response.data.user);
      console.log('fetchUser response: ', response)
    })
    .catch(error => {console.log('fetchUser error: ', error)});
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
