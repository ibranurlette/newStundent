import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
class Footer extends Component{
  render(){
  return (
    <div>
     <Card.Footer className="fixed-bottom" bg="dark" expand="lg" id="back_footer">&copy; Develop by ibra Nurlette</Card.Footer>
    </div>
  );
}
}
export default Footer;
