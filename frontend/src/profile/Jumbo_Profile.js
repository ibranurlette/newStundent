import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {div,Row,Col,Container,Card} from 'react-bootstrap';
import picture from '../img/ibra_picture.jpg';
import Modal_edit from './Modal_edit';
import Modal_detail from './Modal_detail';
import Modal_payment from './Modal_payment';
import { connect } from 'react-redux';
import { getDaftar } from '../client/_action/daftar';
class Jumbo_Profile extends Component{
  componentDidMount(){
    this.props.getDaftar();
  }
  render(){
    const {data} = this.props.daftar;

  return (
      <Container className="profile_content">
      <Row>
      <Col sm={4}>
      </Col>
      <Col sm={4}>
    	<div>
    		<Card>
			  <Card.Img variant="top" src={picture}/>
			  <Card.Body>
			    <Card.Title>{data.nama_lengkap}</Card.Title>
			    <Card.Text>
			     {data.tanggal_daftar}
			    </Card.Text>
			    <Modal_edit data={data}/>
          <Modal_detail data={data}/>
          <Modal_payment/>
			  </Card.Body>
			</Card>
		</div>
      </Col>
      </Row>
    </Container>
  );
}
}

const mapStateToProps = state => {
  return {
    daftar: state.daftar

  }
}

const mapDispatchToProps = dispatch => {
  return {
    getDaftar: () => dispatch(getDaftar())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Jumbo_Profile);
// export default Jumbo_Profile;
