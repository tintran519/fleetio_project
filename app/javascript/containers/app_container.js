import React    from 'react';
import ReactDOM from 'react-dom';

import Navbar from '../components/navbar';

import SearchContainer from './search_container';

import SearchService from '../services/search_service';

class AppContainer extends React.Component {
  constructor (props) {
    super (props)

    this.state = {};

    this.searchService = new SearchService(this);
  }

  render () {
    return (
      <div className = 'app-container'>
        <Navbar />

        <SearchContainer service = {this.searchService} />
      </div>
    )
  }
}

export default AppContainer;
