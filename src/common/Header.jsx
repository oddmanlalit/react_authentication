import React, { Component } from 'react'
import Navigationbar from './Navigationbar';
import Home from '../components/Home';
import Profile from '../components/Profile';
import Login from '../components/Login';
import Register from '../components/Register';
import Forget from '../components/Forget';
import Reset from '../components/Reset';
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
       this.setState({user:user})
  }

  render() {
    return (
      <div>
          <Navigationbar user={this.state.user} setUser={this.setUser} />
          <Routes>
          <Route exact path="/" element ={ <Home/> }/>
          <Route exact path="/profile" element ={  <Profile  user={this.state.user}    /> }/>
          <Route exact path="/login" element ={ <Login user={this.state.user}     setUser={this.setUser}/>}/>
          <Route exact path="/register" element ={ <Register user={this.state.user}  setUser={this.setUser}  /> }/>
          <Route exact path="/forget" element ={ <Forget /> }/>
          <Route path="/reset/:id" element={<Reset />} />
          </Routes> 
      </div>
    )
  }
}

export default Header
