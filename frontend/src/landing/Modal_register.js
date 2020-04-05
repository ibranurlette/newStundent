import React, {Component, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button, Form, Container} from 'react-bootstrap';
import { connect } from 'react-redux';
import {register} from '../client/_action/auth';
import '../css/Modal_register.css';
class Modal_register extends Component{
  state = { show: false};

 hideModalLogin = () => {
    let ibra = this.setState({ show: false });
    setInterval(ibra, 500)
  };
 showModalLogin = () => {
    this.setState({ show: true });
  };

  handleRegister = (e) => {
    e.preventDefault();
    const data = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };
    this.props.register(data);
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render(){
  return (
    <Fragment>
      <Modal show={this.state.show} onHide={this.hideModalLogin} size="sm">
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Container id="conten_form_register">
          <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>username</Form.Label>
            <Form.Control type="text" placeholder="Enter nama lengkap" onChange={this.handleChange} name="username"/>
          </Form.Group>
           <Form.Group controlId="formBasicPassword">
            <Form.Label>email</Form.Label>
            <Form.Control type="email" placeholder="enter email" onChange={this.handleChange} name="email"/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>password</Form.Label>
            <Form.Control type="password" placeholder="password" onChange={this.handleChange} name="password"/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>foto</Form.Label>
            <Form.Control type="file" placeholder="foto" />
          </Form.Group>
          <Modal.Footer className="justify-content-center" id="footer_botton">
          <Button id="submit_register" type="submit" onClick={this.handleRegister}>
            Submit
          </Button>
          <Button id="close_register" onClick={this.hideModalLogin}>
            Close
          </Button>
          </Modal.Footer>
         </Form>
        </Container>
      </Modal>
       <Button  variant="outline-light" onClick={this.showModalLogin}>
        Register
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
    register: (data) => dispatch(register(data))
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Modal_register);

// export default Modal_register;



