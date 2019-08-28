import React, { Component } from 'react';
import './App.scss';
import Navigation from './components/Navigation'
import News from './components/news'
import Main from './components/Main'
import Login from './components/Login'
import Profile from './components/Profile'
import { BrowserRouter as Router, Route } from 'react-router-dom'
class App extends Component {
  state = {
    isLoggedIn: false,
    loginError: false,
    verifyError: false,
    registerUsers: {
      'admin' : 'admin'
    }
  }

  getLoginName = () => document.querySelector('.App__login-name').value
  getLoginPass = () => document.querySelector('.App__login-pass').value

  checkLocalStorage = () => {
    if (localStorage.getItem('login')==='true') {
      this.setState({
        isLoggedIn: true
      })
      this.getVisibleNav(true)
    } else {
      this.getVisibleNav(false)
    }
  }

  componentDidMount() {
    this.checkLocalStorage()
  }

  onLogin = (e) => {
    const userName = this.getLoginName()
    const userPass = this.getLoginPass()
    const verifyName = Object.keys(this.state.registerUsers).includes(userName)
    const verifyPass = this.state.registerUsers[userName] === userPass

    const getVerify = () => {
      if (verifyName && verifyPass) {
        e.preventDefault()
        localStorage.setItem('login', 'true')
        this.getVisibleNav(true)
        this.setState({
          isLoggedIn: true
        })
      } else {
        e.preventDefault()
        this.setState({
          loginError: true,
          verifyError: true
        })
      }
    }
    userName && userPass && getVerify()
  }

  logOut = () => {
    localStorage.setItem('login', 'false')
    this.getVisibleNav(false)
    this.setState({
      isLoggedIn: false
    })
  }
  getVisibleNav = (bool) => {
    let login = document.querySelector('.App__navigation-login')
    let profile = document.querySelector('.App__navigation-profile')
    bool ? this.getVisibleElem([profile], [login]) : this.getVisibleElem([login], [profile])
  }
  getVisibleElem = (visible = [], noVisible = []) => {
    visible.map(a => {
      a.style.opacity = '1'
      a.style.pointerEvents = 'auto'
    })
    noVisible.map(a => {
      a.style.opacity = '0'
      a.style.pointerEvents = 'none'
    })
  }
  render() {
      const { isLoggedIn,  verifyError } = this.state
      return (
        <Router>
          <div className="App">
            <Navigation />
            
            <Route path="/" component={Main} exact/>
            <Route path="/news" component={News}/>
            <Route path="/login" render={() =>(
              <Login 
                isLoggedIn = {isLoggedIn}
                onLogin = {this.onLogin}
                verifyError = {verifyError}
              />
            )}/>
            <Route path="/profile" render={() =>(
              <Profile 
              isLoggedIn = {isLoggedIn}
              logOut = {this.logOut}/>
            )}/>
          </div>
        </Router>
      );
  }
}

export default App;
