import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';

export default class register extends Component {
    state={
        name:'',
        email:'',
        password:'',
        password_confirmation:'',
        message:''
   }

   //login for submit start
   formSubmit =(e) =>{
    const data = {
        name:this.state.name,
        email:this.state.email,
        password:this.state.password,
        password_confirmation:this.state.password_confirmation
    }

    e.preventDefault();

    axios.post('/register', data)
    
      .then((response) =>{
       // console.log(response);
       localStorage.setItem('token',response.data.token);
       this.setState({
         loggedIn:true
       })
       this.props.setUser(response.data.user)
      })
      .catch((error)=> {
        console.log(error);
      });
    } 
    //login for submit end 

  render() {

    // After Registration Redirect to profile

    if(this.state.loggedIn){
        return <Navigate  to={'/profile'}/>
    }
    return (
      <div>
            <br/> <br/> <br/>
            <div clas="row">
                <div class="jumbotron col-lg-4 offset-lg-4 " style={{ backgroundColor: 'lightgrey' }}>
                    <h3 class="text-center" >Register Account</h3>
                    
                    <Form onSubmit={this.formSubmit}>
                    <Form.Group className="mb-3" >
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="User Name" required onChange={(e)=>{this.setState({name:e.target.value})}}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required onChange={(e)=>{this.setState({email:e.target.value})}} />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"  name="password" placeholder="Password"  required onChange={(e)=>{this.setState({password:e.target.value})}} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Confirme Password</Form.Label>
                        <Form.Control type="password" name="password_confirmation" placeholder="Confirm Password"  required onChange={(e)=>{this.setState({password_confirmation:e.target.value})}} />
                    </Form.Group>

                        <div className="d-grid gap-2">
                        <Button variant="primary" type="submit" size="lg">
                            Register
                        </Button>
                        </div>
                        <br></br>
                        Have an Account ?  <Link to="/login"> login Here </Link><br></br>
                        Forget password <Link to="/forget"> Click Here </Link> 
                    </Form> 
                </div>
            </div> 
      </div>
    )
  }
}
