import axios from 'axios';

class SearchService {
  constructor (component) {
    this.component = component;

    this.component.state.search = {
      value: '',
      result: {},
      loading: false,
    }
  }

  fetchVehicle = () => {
    this.setSearch({loading: true});

    const id     = this.getValue();

    axios.defaults.headers.common['Authorization'] = `Token ${process.env.API_KEY}`;
    axios.defaults.headers.common['Account-Token'] = `${process.env.TOKEN}`;

    return axios({
      method: 'get',
      url: `https://secure.fleetio.com/api/v1/vehicles/${id}`,
    }).then(response => {
      this.setSearch({loading: false});
      console.log('response: ', response);
    }).catch(error => {
      this.setSearch({loading: false});
      console.log('error: ', error);
    });
  }

  getValue = () => {
    return this.component.state.search.value;
  }

  isLoading = () => {
    return this.component.state.search.loading;
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
