import React, {Component, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button, Form, Container} from 'react-bootstrap';
import { Link } from "react-router-dom";
class Modal_Greating extends Component{
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
          <Modal.Title>Selamat</Modal.Title>
        </Modal.Header>
        <Container>
          <Form>
           <p>terima kasih telah melakukan pendaftarn, silahkan klik submit untuk melihat data hasil pendaftran anda, anda juga bisa mengeditnya</p>
          <Modal.Footer className="justify-content-center">
          <Button variant="secondary" onClick={this.hideModalLogin}>
            Close
          </Button>
           <Link to="/profile">
            <Button variant="primary" type="submit">
              Submit
            </Button>
            </Link>
          </Modal.Footer>
         </Form>
        </Container>
      </Modal>
       <Button variant="primary" onClick={this.showModalLogin}>
        simpan
      </Button>
    </Fragment>
  );
}
}
export default Modal_Greating;



