import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Jumbo.css';
import './css/Header.css';
import './css/Footer.css';
import Header from "./landing/Header";
import Jumbo from "./landing/Jumbo";
import Footer from "./landing/Footer";
import Footer_home from "./home/Footer_home";
import Header_home from "./home/Header_home";
import Jumbo_home from "./home/Jumbo_home";
import Footer_siswa from "./siswa/Footer_siswa";
import Header_siswa from "./siswa/Header_siswa";
import Jumbo_siswa from "./siswa/Jumbo_siswa";
import Footer_Profile from "./profile/Footer_Profile";
import Header_profile from "./profile/Header_profile";
import Jumbo_Profile from "./profile/Jumbo_Profile";
import Footer_Payment from "./payment/Footer_Payment";
import Header_Payment from "./payment/Header_Payment";
import Jumbo_Payment from "./payment/Jumbo_Payment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {login} from './client/_action/auth';
import {Redirect } from "react-router-dom";
import {connect} from 'react-redux';
import {getUsers} from './client/_action/user';
class App extends Component{
  componentDidMount(){
    this.props.getUsers();
  }
  render(){
    const {authenticated}= this.props.auth;
    const {data} = this.props.user;
    const token = localStorage.getItem("token")
  return (
    <div id="back" className="App">
    <Router>
    {authenticated || token ? (
      <Switch>
      {data.status==="user" ? (
          <Switch>
          <Route path="/profile">
           <Profile/>
          </Route>
          <Route path="/home">
           <Home/>
          </Route>
           <Redirect to="/home" />
            </Switch>
        ): data.status==="admin" ?(
       <Switch>
          <Route path="/siswa">
           <Siswa/>
          </Route>
          <Route path="/payment">
           <Payment/>
          </Route>
          <Redirect to="/siswa" />
        </Switch>
        ): (<Redirect to="/" />)}
      </Switch>
      ): (
        <Switch>
          <Route path="/">
           <Landing/>
          </Route>
          <Redirect to="/" />
        </Switch>
      )}
     </Router>
    </div>
  );
}
}
class Landing extends Component {
  render() {
    return (
      <div>
      <Header />
      <Jumbo />
      <Footer />
      </div>
    )
  }
}
class Home extends Component {
  render() {
    return (
      <div>
      <Header_home />
      <Jumbo_home />
      <Footer_home />
      </div>
    )
  }
}
class Siswa extends Component {
  render() {
    return (
      <div>
      <Footer_siswa />
      <Header_siswa />
      <Jumbo_siswa />
      </div>
    )
  }
}
class Profile extends Component {
  render() {
    return (
      <div>
      <Footer_Profile />
      <Header_profile />
      <Jumbo_Profile />
      </div>
    )
  }
}
class Payment extends Component {
  render() {
    return (
      <div>
      <Footer_Payment />
      <Header_Payment />
      <Jumbo_Payment />
      </div>
    )
  }
}

const mapStateToProps  = state => {
  return {
    auth: state.auth,
    user: state.user
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers())

  }
}
// export default App;
export default connect(mapStateToProps,mapDispatchToProps)(App);
