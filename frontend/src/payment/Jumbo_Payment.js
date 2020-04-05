import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {div,Row,Col,Container,Table,Button } from 'react-bootstrap';
import Modal_Edit from './Modal_Edit';
import Modal_detail from './Modal_detail';
import { getAllBayar } from "../client/_action/bayar";
import { connect } from 'react-redux';
class Jumbo_Payment extends Component{
	 componentDidMount(){
    this.props.getAllBayar();
  }
  render(){
  	const {data} = this.props.bayar;
  return (
      <Container>
      <Row>
      <Col>
    	<div id="form">
    	<h1 className="text-left">Payment</h1>
		  <Table responsive="sm" >
		    <thead>
		      <tr>
		        <th>no</th>
		        <th>nama lengkap</th>
		        <th>kode pembayaran</th>
		        <th>status</th>
		        <th>attachment</th>
		        <th className="text-left">action</th>

		      </tr>
		    </thead>
		    <tbody>
		    {data.map((item,index ) => (
		      <tr>
		        <td>{item.id}</td>
		        <td>{item?.daftar?.nama_lengkap}</td>
		        <td>123 Ab848T43278</td>
		        <td>{item.status}</td>
		        <td>{item.bukti_pembayaran}</td>
		        <td>
			        <td><Modal_Edit/></td>
			        <td><Modal_detail data={item}/></td>
			        <td><Button variant="danger" >delete</Button></td>
		        </td>
		      </tr>
		    	))}
		    </tbody>
		  </Table>
		</div>
      </Col>
      </Row>
    </Container>
  );
}
}
const mapStateToProps = state => {
  return {
    bayar: state.bayar

  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllBayar: () => dispatch(getAllBayar())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Jumbo_Payment);
// export default Jumbo_Payment;
