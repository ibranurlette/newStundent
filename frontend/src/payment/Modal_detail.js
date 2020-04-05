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
            <Form.Label>nama bank :</Form.Label><br/>
            <Form.Label>{data.nama_bank}</Form.Label>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>tanggal pembayaran</Form.Label><br/>
            <Form.Label>{data.tanggal_pembayaran}</Form.Label>
          </Form.Group>
             <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label> nama lengkap </Form.Label><br/>
              <Form.Label>{data?.daftar?.nama_lengkap}</Form.Label>
            </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>tempat lahir : </Form.Label><br/>
            <Form.Label>{data?.daftar?.tempat_lahir}</Form.Label>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>tanggal lahir: </Form.Label><br/>
            <Form.Label>{data?.daftar?.tanggal_lahir}</Form.Label>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>agama :</Form.Label><br/>
            <Form.Label>{data?.daftar?.agama}</Form.Label>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>umur :</Form.Label><br/>
            <Form.Label>{data?.daftar?.agama}</Form.Label>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>alamat :</Form.Label><br/>
            <Form.Label>{data?.daftar?.alamat}</Form.Label>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>jenis kelamin :</Form.Label><br/>
            <Form.Label>{data?.daftar?.jenis_kelamin}</Form.Label>
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
       <Button variant="warning" onClick={this.showModalLogin} className="mr-1">
        detail
      </Button>
    </Fragment>
  );
}
}
export default Modal_detail;



