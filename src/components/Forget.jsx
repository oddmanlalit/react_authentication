import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

export default class Forget extends Component {
  render() {
    return (
        <div>
        <br/> <br/> <br/>
            <div clas="row">
                <div class="jumbotron col-lg-4 offset-lg-4 " style={{ backgroundColor: 'lightgrey' }}>
                    <h3 class="text-center" >Forget Password</h3>

                    <Form>
                    <Form.Group className="mb-3" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                        <div className="d-grid gap-2">
                        <Button variant="primary" type="submit" size="lg">
                            Submit
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
