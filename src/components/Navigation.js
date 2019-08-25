import React, { Component } from 'react'
import NavigationItem from './NavigationItem'


class Navigation extends Component {
  render() {
      return (
        <div className="App__navigation">
          <NavigationItem path = {'/'} name = {'main'} />
          <NavigationItem path = {'/news'} name = {'news'} navItemClass = { 'App__navigation-news' } />
          <NavigationItem path = {'/login'} name = {'login'} />
          <NavigationItem path = {'/profile'} name = {'profile'} />
        </div>
      );
  }
}

export default Navigation;