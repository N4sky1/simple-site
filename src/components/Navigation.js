import React, { Component } from 'react'
import NavigationItem from './NavigationItem'


class Navigation extends Component {
  render() {
      return (
        <div className="App__navigation">
          <NavigationItem 
            path = {'/'} 
            name = {'main'} 
          />
          <NavigationItem 
            path = {'/news'} 
            name = {'news'} 
            navItemClass = { 'App__navigation-news' } 
          />
          <NavigationItem 
            path = {'/login'} 
            name = {'login'} 
            navItemClass = { 'App__navigation-login' } 
          />
          <NavigationItem 
            path = {'/profile'} 
            name = {'profile'} 
            navItemClass = { 'App__navigation-profile' } 
          />
        </div>
      );
  }
}

export default Navigation;