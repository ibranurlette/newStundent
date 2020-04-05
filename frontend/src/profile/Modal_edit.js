import React, {Component, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button, Form, Container} from 'react-bootstrap';
import { connect } from 'react-redux';
import { updateDaftar } from '../client/_action/daftar';
class Modal_edit extends Component{

  state = { show: false };
 hideModalLogin = () => {
    let ibra = this.setState({ show: false });
    setInterval(ibra, 500)
  };
 showModalLogin = () => {
    this.setState({
      show: true,
      name:this.props.data.nama_lengkap,
      alamat:this.props.data.alamat,
      phone:this.props.data.phone,
      email:this.props.data?.user?.email,
      date:this.props.data.tanggal_daftar
       })
  };

 handleChange = (e) => {
    e.preventDefault();
     const value = e.target.value;
    this.setState({ [e.target.name]: e.target.value });
  };
  handleEdit = (e) => {
    e.preventDefault();
    const id = this.props.data.id;
    const name = this.state.name;
    const alamat= this.state.alamat;
    const phone= this.state.phone;
    const email= this.state.email;
    const date= this.state.date;
    const data = {
       name,
       alamat,
       phone,
       email
    }
    this.props.updateDaftar(id, data);
    window.location.reload(false)

  }

  render(){
    const data = this.props.data;
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
            <Form.Control type="text" placeholder="Enter nama lengkap" name="name" value={this.state.name} onChange={this.handleChange}/>
          </Form.Group>
             <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>alamat</Form.Label>
              <Form.Control as="textarea" rows="3" placeholder="alamat" name="alamat" value={this.state.alamat} onChange={this.handleChange}/>
            </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>phone</Form.Label>
            <Form.Control type="text" placeholder="phone" name="phone" value={this.state.phone} onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>foto</Form.Label>
            <Form.Control type="file" placeholder="foto" />
          </Form.Group>
           <Form.Group controlId="formBasicPassword">
            <Form.Label>email</Form.Label>
            <Form.Control type="email" placeholder="enter email" name="email"  value={this.state.email} onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
          <Form.Label>tanggal daftar</Form.Label>
            <Form.Control type="date" name="date"  value={this.state.date} onChange={this.handleChange}/>
          </Form.Group>
          <Modal.Footer className="justify-content-center">
          <Button variant="secondary" onClick={this.hideModalLogin}>
            Close
          </Button>
            <Button variant="primary" type="submit" onClick={this.handleEdit}>
              Submit
            </Button>
          </Modal.Footer>
         </Form>
        </Container>
      </Modal>
       <Button variant="primary" onClick={this.showModalLogin} className="mr-2">
        Edit profile
      </Button>
    </Fragment>
  );
}
}
const mapStateToProps = state => {
  return {
    daftar: state.daftar
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updateDaftar: (id,data) => dispatch(updateDaftar(id, data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal_edit);
// export default Modal_edit;



