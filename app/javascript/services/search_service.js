import axios from 'axios';

class SearchService {
  constructor (component) {
    this.component = component;

    this.component.state.search = {
      value: '',
      result: {},
      loading: false,
      error: '',
    }
  }

  fetchVehicle = () => {
    this.setSearch({loading: true, error: ''});

    const vin = this.getValue();

    axios.defaults.headers.common['Authorization'] = `Token ${process.env.API_KEY}`;
    axios.defaults.headers.common['Account-Token'] = `${process.env.TOKEN}`;

    return axios({
      method: 'get',
      url: `https://secure.fleetio.com/api/v1/vehicles?q[vin_eq]=${vin}`,
    }).then(this.handleSuccess)
    .catch(error => this.handleError(error.response.status));
  }

  getValue = () => {
    return this.component.state.search.value;
  }

  getResult = () => {
    return this.component.state.search.result;
  }

  getError = () => {
    return this.component.state.search.error;
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

  handleSuccess = (response) => {
    const {data} = response;

    if (data.length < 1) { return this.handleError(404); }

    this.setSearch({
      loading: false,
      result: {
        color:        data[0].color,
        imgUrl:       data[0].default_image_url_large,
        name:         data[0].name,
        model:        data[0].model,
        make:         data[0].make,
        year:         data[0].year,
        licensePlate: data[0].license_plate,
        vin:          data[0].vin,
      }
    });
  }

  handleError = (errorStatus) => {
    let message = 'Something went wrong. Please try again later.';

    if (errorStatus == 404) {
      message = "That VIN doesn't exist in the system";
    }

    this.setSearch({loading: false, error: message});
  }
}

export default SearchService;
