import React, {Component, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button, Form, Container} from 'react-bootstrap';
import { Link,Redirect } from "react-router-dom";
import {connect} from 'react-redux';
import {login} from '../client/_action/auth';
import '../css/Modal_login.css';

class Modal_login extends Component{
  state = { show: false};

 hideModalLogin = () => {
    let ibra = this.setState({ show: false });
    setInterval(ibra, 500)
  };
 showModalLogin = () => {
    this.setState({ show: true });
  };

  handleLogin = (e) => {
    e.preventDefault();
    const data = this.state;
    this.props.login(data);
  };
  handleChange = (e) => {
    e.preventDefault();
    const email = e.target.name;
    const value = e.target.value;
     this.setState({[email]: value})
  };
  render(){
  const {error, isLogin} = this.props.auth;
  return (
    <Fragment>
      <Modal show={this.state.show} onHide={this.hideModalLogin} id="modal_login" size="sm">
        <Modal.Header closeButton>
          <Modal.Title id="judul_login">Login</Modal.Title>
        </Modal.Header>
        <Container id="conten_form_login">
          <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={this.handleChange} name="email"/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={this.handleChange} name="password"/>
          </Form.Group>
          <Modal.Footer className="justify-content-center" id="footer_botton">
          <Button id="submit_login" onClick={this.handleLogin}>
            Submit
          </Button>
          <Button id="close_login" onClick={this.hideModalLogin}>
            Close
          </Button>
          </Modal.Footer>
         </Form>
        </Container>
      </Modal>
       <Button variant="outline-light" onClick={this.showModalLogin} className="mr-5 ml-3">
        Login
      </Button>
    </Fragment>
  );
}
}


const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}
const mapDispatchToProps = dispatch => {
  return {
    login: (data) => dispatch(login(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal_login);
// export default Modal_login;



