import React                              from 'react';
import ReactDOM                           from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from '../components/navbar';

import SearchContainer    from './search_container';
import FavoritesContainer from './favorites_container';

import SearchService from '../services/search_service';
import UserService   from '../services/user_service';
import NavService    from '../services/nav_service';

class AppContainer extends React.Component {
  constructor (props) {
    super (props)

    this.state = {};

    this.searchService = new SearchService(this);
    this.userService   = new UserService(this);
    this.navService    = new NavService(this);
  }

  componentDidMount () {
    this.userService.fetchUser();
  }

  render () {
    if (!this.state.user.username) return null;

    return (
      <Router>
        <div className = 'app-container'>
          <Navbar service = {this.navService} />

          <Route
            exact path = '/'
            render = {(props) => <SearchContainer
              isFavorited = {this.userService.isFavorited}
              service     = {this.searchService} /> }/>

          <Route
            exact path = '/favorites'
            render = {(props) => <FavoritesContainer
              isFavorited = {this.userService.isFavorited}
              vehicles    = {this.userService.getVehicles()} /> }/>

        </div>
      </Router>
    )
  }
}

export default AppContainer;
