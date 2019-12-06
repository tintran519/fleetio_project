import React    from 'react';
import ReactDOM from 'react-dom';

import SearchContainer from './search_container';

class AppContainer extends React.Component {
  render () {
    return (
      <div className = 'app-container'>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Fleetio VIN Lookup
          </a>
        </nav>

        <SearchContainer />
      </div>
    )
  }
}

export default AppContainer;
