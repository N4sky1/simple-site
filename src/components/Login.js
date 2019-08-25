import React, { Component } from 'react';
import { Redirect } from 'react-router-dom' 

class Login extends Component {
  render() {
    const { isLoggedIn, onLogin, verifyError } = this.props
      if ( isLoggedIn) {
          return <Redirect to='/profile' />
      }
      return (
        <div className="Login">
          <h1 className="App__title">Please login</h1>
          
          <form className="App__login-form">
            <span 
                className="App__verify-error"
                style={verifyError ? {opacity:1} : {}}>
                incorrect data, please try again
            </span>
            <input className="App__login-name App__input" required type="text"/>
            <input className="App__login-pass App__input" required type="text"/>
            <button className="App__login-btn" onClick = { onLogin }>
                Login
            </button>
          </form>
        </div>
      );
  }
}

export default Login;