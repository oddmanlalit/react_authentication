import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



export default class Navigationbar extends Component {
  state ={
     loggedout : ''
  }

  logout=()=>{
     localStorage.clear();
      this.props.setUser(null);
  }
  render() {

    let buttons;
    let profile;
    if(localStorage.getItem('token')){
      buttons =(
        <Nav>
          <Nav.Link as={Link} to="/" onClick={this.logout}>Logout</Nav.Link>   
        </Nav>     
      )

      profile =(
        <Nav>
        <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
        </Nav>
      )

    }else{

      buttons =(
        <Nav>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          <Nav.Link as={Link} to="/register">Register</Nav.Link>
        </Nav>
         )

    }


    return (
      <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><Nav.Link as={Link} to="/">Easy learning</Nav.Link></Navbar.Brand>
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              {profile}
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
           {buttons}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    )
  }
}
