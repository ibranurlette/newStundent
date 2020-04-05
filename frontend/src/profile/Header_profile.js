import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Form,Dropdown} from 'react-bootstrap';
import picture from '../img/ibra_picture.jpg';
import { IoMdLogOut } from 'react-icons/io';
import { Link } from "react-router-dom";
import {getUsers} from '../client/_action/user';
import {connect} from 'react-redux';
class Header_profile extends Component{
  componentDidMount(){
    this.props.getUsers();
  }
  render(){
  const handleLogout = () => {
      localStorage.clear();
      window.location.reload()
    }
  const {data} = this.props.user;
  return (
    <div>
    <Navbar bg="light" expand="lg" className="fixed-top" id="navbar_landing">
	  <Navbar.Brand href="#home" className="text-white">ibra</Navbar.Brand>
	  <Navbar.Toggle aria-controls="basic-navbar-nav" />
	  <Navbar.Collapse id="basic-navbar-nav">
	    <Nav className="mr-auto">
	      <Nav.Link href="#home" className="text-white">Home</Nav.Link>
	    </Nav>
	    <Form inline>
	    <Dropdown>
      <Dropdown.Toggle variant="none" id="dropdown-basic">
    	     <span className="text-white"><strong>{data.username}</strong></span><img src={picture} id="picture" className="mr-4 ml-2"/>
      </Dropdown.Toggle>
      <Dropdown.Menu>
      <Link to="/home">
        <p className="ml-4"><IoMdLogOut className="mr-3"/>home</p>
      </Link>
      <Link to="/">
        <p className="ml-4" onClick={handleLogout}><IoMdLogOut className="mr-3"/>logout</p>
      </Link>
      </Dropdown.Menu>
    </Dropdown>
	    </Form>
	  </Navbar.Collapse>
	</Navbar>
    </div>
  );
}
}
const mapStateToProps = state => {
  return {
    user: state.user
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers())

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header_profile);
// export default Header_profile;
