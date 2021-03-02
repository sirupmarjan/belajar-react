import { Toast , Row, Col, Button, Alert } from 'bootstrap';
import React, { Component, useState } from 'react'
import { Container, Navbar } from 'react-bootstrap';
import { NavLink,HashRouter, Route } from 'react-router-dom';
import Nar from './Navbar';
import Home from './home';
import Tour from './tour';
import Misi from './misi';

 class App extends Component {
  constructor(){
    super();
    this.state = {name : "Aldien"};  
  }
  
  ChangeName = () => {
    if(this.state.name == "Aldien"){
      this.setState({
        name : "Nasrun"
      });
    }else{
      this.setState({
        name : "Aldien"
      });
    }
  }


  render() {
    return (
      <div>
        <p>hello {this.state.name}</p>
        <button onClick={this.ChangeName}> Ubah Nama</button>
      <hr></hr>
      </div>
    );
  }
}

class TheHeader extends Component{
render(){
  return(
      <div >
        <HashRouter>
        <Navbar bg="dark">
          <h5 className="text-white">WRLD</h5>
        </Navbar>
        <div className="mx-2 my2">
          <ul>
            <li><NavLink to="/aku">Aku</NavLink></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        </HashRouter>
      </div>
  );
}
}



class AppChat extends Component {
  render() {
    return (
      <div>

        <pre>{this.props.sender}</pre>
        <p>{this.props.content}</p>
        <hr></hr>
      </div>
    )
  }
}


class Chat extends Component {
  render() {
    return (
      <div>

        <HashRouter>
        <Nar/>
        <Container>
        <div className="content">
          <Route exact path="/" component={Home}/>
          <Route  path="/tour" component={Tour}/>
          <Route  path="/misi" component={Misi}/>
        </div>
        </Container>
        </HashRouter>
      </div>
    )
  }
}

export default Chat;
