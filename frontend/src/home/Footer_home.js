import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
class Footer_home extends Component{
  render(){
  return (
    <div >
     {/*<Card.Footer className="text-muted fixed-bottom" id="footer" bg="light" expand="lg"> develop by IbraNurlette</Card.Footer>*/}
     <Card.Footer className='text-center mt-5'>
        <div className='container'>
        	<p className="">&#169;2021 Created By Ibra Nurlette</p>
        </div>
      </Card.Footer>
    </div>
  );
}
}
export default Footer_home;
