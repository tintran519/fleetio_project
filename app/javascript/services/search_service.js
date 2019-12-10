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
    this.setSearch({loading: true, error: '', result: {}});
    this.component.vehicleService.setVehicle({loading: true, error: ''});

    const vin = this.getValue();

    axios.defaults.headers.common['Authorization'] = `Token ${process.env.API_KEY}`;
    axios.defaults.headers.common['Account-Token'] = `${process.env.TOKEN}`;

    return axios({
      method: 'get',
      url: `https://secure.fleetio.com/api/v1/vehicles?q[vin_eq]=${vin}`,
    }).then(this.handleFetchVehicleSuccess)
    .catch(error => this.handleError(error.response.status));
  }

  fetchFuelEntries = (id) => {
    return axios({
      method: 'get',
      url: `https://secure.fleetio.com/api/v1/vehicles/${id}/fuel_entries`,
    }).then(this.handleFetchFuelEntriesSuccess)
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

  handleFetchVehicleSuccess = (response) => {
    const {data} = response;

    if (data.length < 1) { return this.handleError(404); }

    this.setSearch({
      result: {
        color:         data[0].color,
        image_url:     data[0].default_image_url_large,
        name:          data[0].name,
        model:         data[0].model,
        make:          data[0].make,
        year:          data[0].year,
        license_plate: data[0].license_plate,
        vin:           data[0].vin,
      }
    });

    this.fetchFuelEntries(data[0].id);
  }

  handleFetchFuelEntriesSuccess = (response) => {
    const fuelEntries = response.data;

    const fuelEfficiency = this.sumKeys(fuelEntries, 'mpg_us')/fuelEntries.length;

    this.setSearch({
      loading: false,
      result: {...this.getResult(), fuel_efficiency: Math.round(fuelEfficiency)}
    });

    this.component.vehicleService.setVehicle({
      loading: false, error: ''
    });

    // If inverse is required (total gallons/total miles)
    // fuelEntries.reduce((a,b) => {
    //   const value = isFinite(1/b['mpg_us']) ? 1/b['mpg_us'] : 0;
    //
    //   return a + value;
    // }, 0);
  }

  sumKeys = (arr, key) => {
    return arr.reduce((a,b) => a + (b[key] || 0), 0);
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
