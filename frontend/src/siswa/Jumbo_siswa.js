import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {div,Row,Col,Container,Table,Button } from 'react-bootstrap';
import Modal_Edit from './Modal_Edit';
import Modal_detail from './Modal_detail';
import { getAllDaftar } from "../client/_action/daftar";
import { connect } from 'react-redux';
class Jumbo_home extends Component{
	 componentDidMount(){
    this.props.getAllDaftar();
  }
  render(){
  	const {data} = this.props.daftar;
  return (
      <div>
      <Row>
      <Col>
    	<div id="form">
    	<h1 className="text-left">Data Siswa</h1>
		  <Table responsive="sm" >
		    <thead>
		      <tr>
		        <th>no</th>
		        <th>nama lengkap</th>
		        <th>tempat lahir</th>
		        <th>tanggal lahir</th>
		        <th>agama</th>
		        <th>umur</th>
		        <th>phone</th>
		        <th>attachment</th>
		        <th>alamat</th>
		        <th>jenis kelamin</th>
		        <th>tanggal pendaftaran</th>
		        <th>asal sekolah</th>
		        <th>action</th>
		      </tr>
		    </thead>
		    <tbody>
		    {data.map((item, index) => (
		      <tr key={index}>
		        <td>{item.id}</td>
		        <td>{item.nama_lengkap}</td>
		        <td>{item.tempat_lahir}</td>
		        <td>{item.tanggal_lahir}</td>
		        <td>{item.agama}</td>
		        <td>{item.umur}</td>
		        <td>{item.phone}</td>
		        <td>{item.foto}</td>
		        <td>{item.alamat}</td>
		        <td>{item.jenis_kelamin}</td>
		        <td>{item.tanggal_daftar}</td>
		        <td>{item.asal_sekolah}</td>
		        <td>
			       <Modal_Edit/>
			       <Modal_detail data={item}/>
			       <Button variant="danger" className="mt-1">delete</Button>
		        </td>
		      </tr>
		    	))}
		    </tbody>
		  </Table>
		</div>
      </Col>
      </Row>
    </div>
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
    getAllDaftar: () => dispatch(getAllDaftar())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Jumbo_home);
// export default Jumbo_home;
