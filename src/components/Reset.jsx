import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Reset extends Component {
    state={
        token:'',
        email:'',
        password:'',
        password_confirmation:'',
        message:'',
        message_class:''
   }
   
   //Reset form  submit start
   formSubmit =(e) =>{
    e.preventDefault();
    const data = {
        token:this.state.token,
        email:this.state.email,
        password:this.state.password,
        password_confirmation:this.state.password_confirmation
    }

   

    axios.post('/resetpassword', data)
      .then((response) =>{
        this.setState({message:response.data.message})
        document.getElementById("formsubmit").reset();
        this.setState({message_class:'alert alert-success'})
       
      })
      .catch((error)=> {
        this.setState({message:error.response.data.message})
        this.setState({message_class:'alert alert-danger'})
      });
    } 
    //Reset form submit end 
  render() {

    let error ="";
    let message_class =this.state.message_class;
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
                <h3 class="text-center" >Reset  Account</h3>
                
                <Form onSubmit={this.formSubmit} id="formsubmit">
                 {error}
                <Form.Group className="mb-3" >
                    <Form.Label>Pin Code</Form.Label>
                    <Form.Control type="text" name="token" placeholder="Pin Code" required onChange={(e)=>{this.setState({token:e.target.value})}}/>
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
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password"  name="password" placeholder="Password"  required onChange={(e)=>{this.setState({password:e.target.value})}} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Confirme Password</Form.Label>
                    <Form.Control type="password" name="password_confirmation" placeholder="Confirm Password"  required onChange={(e)=>{this.setState({password_confirmation:e.target.value})}} />
                </Form.Group>

                    <div className="d-grid gap-2">
                    <Button variant="primary" type="submit" size="lg">
                        Reset Password
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
