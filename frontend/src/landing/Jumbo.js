import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron,Row,Col,Button } from 'react-bootstrap';
class Jumbo extends Component{
  render(){
  return (
    <div>
      <Jumbotron className="bg-transparent" id="back_jumbo">
    	<Row className="ml-5 mt-5">
		  <Col sm={6}>
		  <h1 className="text-left sekolah">Halo Ibra</h1>
		  	<p className="text-left paragraf">
		  	  Selamat datang di website kami, silahkan daftar jika belum punya akun
		   </p>
		   <p className="text-left">
		  	  <Button id="button_about_us">About us</Button>
		   </p>
		  </Col>
		 </Row>
	</Jumbotron>
    </div>
  );
}
}
export default Jumbo;
