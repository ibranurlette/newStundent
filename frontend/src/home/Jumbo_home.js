import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form,Row,Col,Container } from 'react-bootstrap';
import { Link,Redirect } from "react-router-dom";
import Modal_Greating from './Modal_Greating';
import { connect } from "react-redux";
import { Daftar_diri } from "../client/_action/daftar";
class Jumbo_home extends Component{
	handleDaftar = (e) => {
		e.preventDefault();
		const data = {
			nama_lengkap: this.state.name,
			tempat_lahir: this.state.tempat_lahir,
			tanggal_lahir: this.state.t_lahir,
			agama: this.state.religen,
			umur: this.state.umur,
			alamat: this.state.alamat,
			phone: this.state.hp,
			tanggal_daftar: this.state.t_daftar,
			asal_sekolah: this.state.a_sekolah,
			jenis_kelamin: this.state.jk
		}
	    this.props.Daftar_diri(data);
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
      <Container>
      <Row>
      <Col sm={2}>
      </Col>
      <Col sm={8}>
    	<Form className="text-left pendaftaran">
    	<h1 className="mb-4">Lengkapi Data Diri</h1>
		  <Form.Group controlId="formBasicEmail">
		    <Form.Label>nama lengkap</Form.Label>
		    <Form.Control type="text" placeholder="nama lengkap" onChange={this.handleChange} name="name"/>
		  </Form.Group>
		  <Form.Group controlId="formBasicEmail">
		    <Form.Label>tempat lahir</Form.Label>
		    <Form.Control type="text" placeholder="tempat lahir" onChange={this.handleChange} name="tempat_lahir"/>
		  </Form.Group>
		  <Form.Group controlId="formBasicEmail">
		    <Form.Label>tanggal lahir</Form.Label>
		    <Form.Control type="date" onChange={this.handleChange} name="t_lahir"/>
		  </Form.Group>
		   <Form.Group controlId="exampleForm.ControlSelect1">
		    <Form.Label>agama</Form.Label>
		    <Form.Control as="select" onChange={this.handleChange} name="religen">
		      <option>--pilih agama--</option>
		      <option>islam</option>
		      <option>kristen</option>
		      <option>budha</option>
		      <option>hindu</option>
		      <option>katolik</option>
		    </Form.Control>
		  </Form.Group>
		   <Form.Group controlId="formBasicEmail">
		    <Form.Label>umur</Form.Label>
		    <Form.Control type="text" placeholder="umur" onChange={this.handleChange} name="umur"/>
		  </Form.Group>
		   <Form.Group controlId="exampleForm.ControlTextarea1">
		    <Form.Label>alamat</Form.Label>
		    <Form.Control as="textarea" rows="3" placeholder="alamat " onChange={this.handleChange} name="alamat"/>
		  </Form.Group>
		  <Form.Group controlId="exampleForm.ControlTextarea1">
		    <Form.Label>phone</Form.Label>
		    <Form.Control placeholder="phone " onChange={this.handleChange} name="hp"/>
		  </Form.Group>
		    <Form.Group controlId="formBasicEmail">
		    <Form.Label>tanggal pendaftaran</Form.Label>
		    <Form.Control type="date" onChange={this.handleChange} name="t_daftar"/>
		  </Form.Group>
		 <Form.Group controlId="formBasicPassword">
		    <Form.Label>asal sekolah</Form.Label>
		    <Form.Control type="text" placeholder="asal sekolah" onChange={this.handleChange} name="a_sekolah"/>
		  </Form.Group>
		   <Form.Group controlId="exampleForm.ControlSelect1">
		    <Form.Label>jenis-kelamin</Form.Label>
		    <Form.Control as="select" onChange={this.handleChange} name="jk">
		      <option>--jenis kelamin--</option>
		      <option>laki-laki</option>
		      <option>perempuan</option>
		    </Form.Control>
		  </Form.Group>
		  <Button variant="primary" onClick={this.handleDaftar}>
	        simpan
	      </Button>
		</Form>
      </Col>
      </Row>
    </Container>
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
    Daftar_diri: data => dispatch(Daftar_diri(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Jumbo_home);
// onClick={this.showModalLogin}
// export default Jumbo_home;
