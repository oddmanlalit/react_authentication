import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export default class profile extends Component {
  render() {
    let name;
    let email;
    if(this.props.user){
       name = this.props.user.name;
       email= this.props.user.email;
    }

    return (
      <div>
       <br/> <br/> <br/>
            <div clas="row">
                <div class="jumbotron col-lg-4 offset-lg-4 " style={{ backgroundColor: 'lightgrey' }}>
                    <h3 class="text-center" >User Profile</h3>
                    <ListGroup>
                    <ListGroup.Item>Name : {name}</ListGroup.Item>
                    <ListGroup.Item>Email : {email}</ListGroup.Item>
                    
                    </ListGroup>
                   
                </div>
            </div> 
      </div>
    )
  }
}
