import axios from 'axios';

class SearchService {
  constructor (component) {
    this.component = component;

    this.component.state.search = {
      value: '',
    }
  }

  fetchVehicle = () => {
    const id     = this.getValue();

    axios.defaults.headers.common['Authorization'] = `Token ${process.env.API_KEY}`;
    axios.defaults.headers.common['Account-Token'] = `${process.env.TOKEN}`;

    return axios({
      method: 'get',
      url: `https://secure.fleetio.com/api/v1/vehicles/${id}`,
    }).then(response => {
      console.log('response: ', response);
    }).catch(error => {
      console.log('error: ', error);
    });
  }

  getValue = () => {
    return this.component.state.search.value;
  }

  onChange = (e) => {
    this.setSearch({value: e.target.value});
  }

  setSearch = (props) => {
    this.component.setState(state => {
      return {
        search: {
          ...state.search,
          ...props,
        },
      };
    });
  }
}

export default SearchService;
