import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Forget extends Component {

    state={
            email:'',
            message:'',
            message_class:''
    }

    //login for submit start
    formSubmit =(e) =>{
        const data = {email:this.state.email }

        e.preventDefault();
        axios.post('/forgetpassword', data)
          .then((response) =>{
           this.setState({message:response.data.message})
           document.getElementById("forgetform").reset();
           this.setState({message_class:'alert alert-success'})
          })
          .catch((error)=> {
            console.log(error);
            this.setState({message:error.response.data.message})
            this.setState({message_class:'alert alert-danger'})
          });
    } 
    //login for submit end 
  render() {
    ///show Error message
    let error ="";
    let message_class = this.state.message_class;
    if(this.state.message){
        error =(
              <div>
                  <div class={message_class} role="alert">
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
                    <h3 class="text-center" >Forget Password</h3>
    
                    <Form onSubmit={this.formSubmit} id="forgetform">
                        {error}
                    <Form.Group className="mb-3" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required onChange={(e)=>{this.setState({email:e.target.value})}}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                        <div className="d-grid gap-2">
                        <Button variant="primary" type="submit" size="lg">
                            Forget Password
                        </Button>
                        </div>
                        <br></br>
                        <br></br>
                        Have an Account ?  <Link to="/login"> login Here </Link><br></br>
                        Don't Have Account  <Link to="/Register"> Register Here </Link>  
                    </Form> 
                </div>
            </div> 
    </div>
    )
  }
}
