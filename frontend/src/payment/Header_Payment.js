import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Form, Dropdown} from 'react-bootstrap';
import picture from '../img/ibra_picture.jpg';
import { Link } from "react-router-dom";
import { GiPayMoney } from 'react-icons/gi';
import { IoMdLogOut } from 'react-icons/io';
import {getUsers} from '../client/_action/user';
import {connect} from 'react-redux';
class Header_Payment extends Component{
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
	  <Navbar.Brand href="#home">ibra</Navbar.Brand>
	  <Navbar.Toggle aria-controls="basic-navbar-nav" />
	  <Navbar.Collapse id="basic-navbar-nav">
	    <Nav className="mr-auto">
	      <Nav.Link href="#home">Home</Nav.Link>
	    </Nav>
	    <Form inline>
	    <Dropdown>
      <Dropdown.Toggle variant="none" id="dropdown-basic">
    	     <span><strong>{data.username}</strong></span><img src={picture} id="picture" className="mr-4 ml-2"/>
      </Dropdown.Toggle>
      <Dropdown.Menu>
       <Link to="/siswa">
        <p className="ml-4"><GiPayMoney className="mr-3"/>data siswa</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header_Payment);
// export default Header_Payment;
