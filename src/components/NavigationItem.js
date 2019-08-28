import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NavigationItem extends Component {
  render() {
     const { name, navItemClass, path } = this.props
      return (
        <Link 
          to={ path } 
          className={"App__navigation-item " + navItemClass}
        >
          {name}
        </Link>
      );
  }
}

export default NavigationItem;