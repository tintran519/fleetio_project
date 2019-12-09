import React from 'react';

class NavService {
  constructor (component) {
    this.component = component;

    this.component.state.nav = {
      collapseNav: false
    }
  }

  collapseClass = () => {
    let classes = ['navbar-collapse'];

    if (this.getCollapseNav()) classes.push('collapse');

    return classes.join(' ');
  }

  getCollapseNav = () => {
    return this.component.state.nav.collapseNav;
  }

  toggleCollapseNav = () => {
    this.component.setState(prevState => {
      return {
        nav: {
          collapseNav: !prevState.nav.collapseNav
        }
      }
    })
  }
}

export default NavService;
