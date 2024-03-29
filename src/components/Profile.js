import React, { Component } from 'react';
import { Redirect } from 'react-router-dom' 
import userImg from '../img/user.svg'

class Profile extends Component {
  render() {
      const { isLoggedIn, logOut } = this.props
     if (isLoggedIn) {
        return (
            <div className="App__profile">
                <div className="App__profile-text">
                    <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus lacus, 
                    dictum eget libero fringilla, ornare volutpat neque volutpat.
                    </span>
                </div>
                <div className="App__profile-info">
                    <img className="App_profile-img" src={userImg} alt="user-avatar"/>
                    <p>name</p>
                    <p>data register: 12.05.2015</p>
                    <p>setting</p>
                    <p 
                    className="App__profile-logout"
                    onClick={logOut}>
                        logout
                    </p>
                </div>
            </div>
        )
    }
    return <Redirect to='/login'/>
  }
}

export default Profile;