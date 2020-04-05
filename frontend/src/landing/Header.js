import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Form} from 'react-bootstrap';
import Modal_login from './Modal_login';
import Modal_register from './Modal_register';
class Header extends Component{
  render(){
  return (
    <div>
    <Navbar bg="light" expand="lg" id="navbar_landing">
	  <Navbar.Brand href="#home" className="text-white">ibra</Navbar.Brand>
	  <Navbar.Toggle aria-controls="basic-navbar-nav" />
	  <Navbar.Collapse id="basic-navbar-nav">
	    <Nav className="mr-auto">
	      <Nav.Link href="#home" className="text-white">Home</Nav.Link>
	    </Nav>
	    <Form inline>
	      <Modal_register/>
	      <Modal_login />
	    </Form>
	  </Navbar.Collapse>
	</Navbar>
    </div>
  );
}
}
export default Header;
