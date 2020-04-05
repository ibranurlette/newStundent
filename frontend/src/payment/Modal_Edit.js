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
          <Modal.Title>Edit payment</Modal.Title>
        </Modal.Header>
        <Container>
          <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>nama lengkap</Form.Label>
            <Form.Control type="text" placeholder="Enter nama lengkap" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>kode pembayran</Form.Label>
            <Form.Control type="text" placeholder="Enter kode pembayaran" />
          </Form.Group>
           <Form.Group controlId="formBasicEmail">
            <Form.Label>status</Form.Label>
            <Form.Control type="text" placeholder="Enter status" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>attachment</Form.Label>
            <Form.Control type="text" placeholder="attachment" />
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
       <Button variant="primary" onClick={this.showModalLogin}>
        edit
      </Button>
    </Fragment>
  );
}
}
export default Modal_Edit;



