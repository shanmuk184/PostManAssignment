import React, { Component } from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';

const styles = {
  margin:{
    margin:'10px'
  },
  formHeading:{
    margin:'10px',
    textAlign:'center'

  }
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password: '',
      
    };

  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    fetch(this.props.urlToPost, {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status === 200) {
        this.props.history.push('/');
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error logging in please try again');
    });
  }

  render() {
    return (
      <Form style={styles.margin} onSubmit={this.onSubmit} className='justify-content'>
        <h1 style={styles.formHeading} >{this.props.formHeadingText}</h1>
        <Form.Group as={Row}  controlId="formBasicEmail">
          <Form.Label column sm={2}>Email address</Form.Label>
          <Col sm={10} >
          <Form.Control  type="email" placeholder="Enter email"
                name="email"
                defaultValue={this.state.email}
                onChange={this.handleInputChange}
                required
                />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formBasicPassword">
          <Form.Label column sm={2} >Password</Form.Label>
          <Col sm={10} >
          <Form.Control type="password" 
                        name="password"
                        placeholder="Password"
                        defaultValue={this.state.email}
                        onChange={this.handleInputChange}
                        required
                         />
          </Col>
        </Form.Group>
              
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button variant="primary" type="submit">
              {this.props.submitButtonText}
            </Button>
          </Col>
        </Form.Group>
      </Form>
    );
  }
}