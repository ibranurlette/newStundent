import React, {Component, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button, Form, Container} from 'react-bootstrap';
class Modal_Edit extends Component{
  state = { show: false};

 hideModalLogin = () => {
    let ibra = this.setState({ show: false });
    setInterval(ibra, 500)
  };
 showModalLogin = () => {
    this.setState({ show: true });
  };
  render(){
  return (
    <Fragment>
      <Modal show={this.state.show} onHide={this.hideModalLogin}>
        <Modal.Header closeButton>
          <Modal.Title>edit profile</Modal.Title>
        </Modal.Header>
        <Container>
          <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>nama lengkap</Form.Label>
            <Form.Control type="text" placeholder="Enter nama lengkap" />
          </Form.Group>
           <Form.Group controlId="formBasicEmail">
            <Form.Label>alamat</Form.Label>
            <Form.Control type="text" placeholder="Enter alamat" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>phone</Form.Label>
            <Form.Control type="text" placeholder="phone" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>foto</Form.Label>
            <Form.Control type="file" placeholder="foto" />
          </Form.Group>
           <Form.Group controlId="formBasicPassword">
            <Form.Label>email</Form.Label>
            <Form.Control type="email" placeholder="enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>password</Form.Label>
            <Form.Control type="password" placeholder="password" />
          </Form.Group>
          <Modal.Footer className="justify-content-center">
          <Button variant="secondary" onClick={this.hideModalLogin}>
            Close
          </Button>
            <Button variant="primary" type="submit">
              update
            </Button>
          </Modal.Footer>
         </Form>
        </Container>
      </Modal>
       <Button variant="primary" onClick={this.showModalLogin} className="mr-1">
        edit
      </Button>
    </Fragment>
  );
}
}
export default Modal_Edit;



