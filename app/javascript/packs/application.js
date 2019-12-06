import "core-js/stable";
import "regenerator-runtime/runtime";

import React    from 'react';
import ReactDOM from 'react-dom';

import '../stylesheets/app.scss';

import AppContainer from '../containers/app_container';

ReactDOM.render(
  <AppContainer />,
  document.getElementById('root')
);
