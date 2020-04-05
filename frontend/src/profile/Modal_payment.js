import React, {Component, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button, Form, Container} from 'react-bootstrap';
import { connect } from "react-redux";
import { addBayar } from "../client/_action/bayar";
class Modal_payment extends Component{
  state = { show: false};

 hideModalLogin = () => {
    let ibra = this.setState({ show: false });
    setInterval(ibra, 500)
  };
 showModalLogin = () => {
    this.setState({ show: true });
  };
  handleBayar = (e) =>{
    e.preventDefault();
   const data = {
      nama_bank: this.state.name_bank,
      tanggal_pembayaran: this.state.t_bayar
    }
    this.props.addBayar(data);
    window.location.reload(false);
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render(){
  return (
    <Fragment>
      <Modal show={this.state.show} onHide={this.hideModalLogin}>
        <Modal.Header closeButton>
          <Modal.Title>Pembayaran</Modal.Title>
        </Modal.Header>
        <Container>
          <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>nama bank</Form.Label>
            <Form.Control type="text" placeholder="Enter nama lengkap" onChange={this.handleChange} name="name_bank"/>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>struk Pembayaran</Form.Label>
            <Form.Control type="file"/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>tanggal pembayaran  </Form.Label>
            <Form.Control type="date"  onChange={this.handleChange} name="t_bayar"/>
          </Form.Group>
          <Modal.Footer className="justify-content-center">
          <Button variant="secondary" onClick={this.hideModalLogin}>
            Close
          </Button>
            <Button variant="primary" type="submit" onClick={this.handleBayar}>
              Submit
            </Button>
          </Modal.Footer>
         </Form>
        </Container>
      </Modal>
       <Button variant="warning" onClick={this.showModalLogin}>
         Pembayaran
      </Button>
    </Fragment>
  );
}
}
const mapStateToProps = state => {
  return {
    bayar: state.bayar
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addBayar: data => dispatch(addBayar(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal_payment);
// export default Modal_payment;



