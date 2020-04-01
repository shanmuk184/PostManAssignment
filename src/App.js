import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import withAuth from './withAuth';
import Home from './Home';
import Secret from './Secret';
import Login from './Login';
import {Navbar, Nav, Container} from 'react-bootstrap';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      authToken:''
    }
  }
  


  render() {
    return (
      <Container>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Presence Detection</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/register">Register</Nav.Link>
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/secret">Secret</Nav.Link>
                </Nav>
                
              </Navbar.Collapse>
            </Navbar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/register' render={(props) => <Login {...props} urlToPost='/api/register'
                                           submitButtonText='Register'
                                           formHeadingText = 'Register Page' />} />
          <Route path="/secret" component={withAuth(Secret)} />
          <Route path="/login" 
                render={(props) => <Login {...props} urlToPost='/api/authenticate'
                                           submitButtonText='Login'
                                           formHeadingText = 'Login Page' />} />
        </Switch>
      </Container>
    );
  }
}

export default App;
