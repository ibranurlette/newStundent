import React, {Component, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button, Form, Container} from 'react-bootstrap';
class Modal_detail extends Component{
  state = { show: false};

 hideModalLogin = () => {
    let ibra = this.setState({ show: false });
    setInterval(ibra, 500)
  };
 showModalLogin = () => {
    this.setState({ show: true });
  };
  render(){
    const data = this.props.data;
  return (
    <Fragment>
      <Modal show={this.state.show} onHide={this.hideModalLogin}>
        <Modal.Header closeButton>
          <Modal.Title>Detail</Modal.Title>
        </Modal.Header>
        <Container>
          <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>nama lengkap :</Form.Label><br/>
            <Form.Label>{data.nama_lengkap}</Form.Label>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>email: </Form.Label><br/>
            <Form.Label>{data?.user?.email}</Form.Label>
          </Form.Group>
             <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>alamat : </Form.Label><br/>
              <Form.Label>{data.alamat}</Form.Label>
            </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>tanggal daftar : </Form.Label><br/>
            <Form.Label>{data.tanggal_daftar}</Form.Label>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>phone: </Form.Label><br/>
            <Form.Label>{data.phone}</Form.Label>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>foto :</Form.Label><br/>
            <Form.Label>{data?.user?.foto}</Form.Label>
          </Form.Group>
          <Modal.Footer className="justify-content-center">
          <Button variant="secondary" onClick={this.hideModalLogin}>
            Close
          </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
         </Form>
        </Container>
      </Modal>
       <Button variant="info" onClick={this.showModalLogin} className="mr-1">
        detail
      </Button>
    </Fragment>
  );
}
}
export default Modal_detail;



