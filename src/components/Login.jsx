import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, Navigate  } from 'react-router-dom';
import axios from 'axios';

export default class login extends Component {


    state={
          email:'',
          password:'',
          message:''
    }
    
    //login for submit start
    formSubmit =(e) =>{
        const data = {email:this.state.email,
                      password:this.state.password
        }

        e.preventDefault();

        axios.post('/login', data)
        
          .then((response) =>{
           localStorage.setItem('token',response.data.token)
           this.setState({
             loggedIn:true
           })
          
           this.props.setUser(response.data.user)
           
          })
          .catch((error)=> {
            this.setState({message:error.response.data.message})
          });
    } 
    //login for submit end 

  render() {

    // After Login Redirect to profile

    if(this.state.loggedIn){
        return <Navigate  to={'/profile'}/>
    }

    if(localStorage.getItem('token')){
      return <Navigate  to={'/profile'}/>
    } 

     ///show Error message
     let error ="";
     if(this.state.message){
         error =(
               <div>
                   <div class="alert alert-danger" role="alert">
                     {this.state.message}
                   </div>
               </div>
         ) 
     }


    return (
    <div>
        <br/> <br/> <br/>
            <div clas="row">
                <div class="jumbotron col-lg-4 offset-lg-4 " style={{ backgroundColor: 'lightgrey' }}>
                    <h3 class="text-center" >Login Account</h3>

                    <Form onSubmit={this.formSubmit}>
                      {error}
                    <Form.Group className="mb-3" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required onChange={(e)=>{this.setState({email:e.target.value})}} />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"  name="password" placeholder="Password"  required onChange={(e)=>{this.setState({password:e.target.value})}}/>
                    </Form.Group>
                        <div className="d-grid gap-2">
                        <Button variant="primary" type="submit" size="lg">
                            Login
                        </Button>
                        </div>
                        <br></br>
                        Forget password <Link to="/forget"> Click Here </Link> 
                    </Form> 
                </div>
            </div> 
    </div>
    )
  }
}
