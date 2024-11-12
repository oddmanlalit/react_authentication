import React, { Component } from 'react'
import Navigationbar from './Navigationbar';
import Home from '../components/Home';
import Profile from '../components/Profile';
import Login from '../components/Login';
import Register from '../components/Register';
import Forget from '../components/Forget';
import axios from 'axios';

import { Routes, Route } from 'react-router-dom';

 class Header extends Component {


  state = {
    user:{}
  }

  componentDidMount(){
    //Login User Credential
      axios.get('/user')
          .then((response) =>{
              this.setUser(response.data)
          })
          .catch((error)=> {
            console.log(error);
          });
    
  }

  setUser = (user) =>{
    console.log(user);
     this.setState({user:user})
  }

  render() {
    return (
      <div>
          <Navigationbar user={this.state.user} setUser={this.setUser} />
          <Routes>
          <Route exact path="/" element ={ <Home/> }/>
          <Route exact path="/profile" element ={  <Profile  user={this.state.user}    /> }/>
          <Route exact path="/login" element ={ <Login/> } />
          <Route exact path="/register" element ={ <Register /> }/>
          <Route exact path="/forget" element ={ <Forget /> }/>
          </Routes> 
      </div>
    )
  }
}

export default Header
