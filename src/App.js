import React, { Component } from 'react'
import Navbar from './Navbar';

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


let chat = (
  <div>
        <Navbar/>
        <App/>
  <AppChat sender="dian" content="Hi, Apa kabar?" />
  <AppChat sender="petanikode" content="Kabar Baik" />
  <AppChat sender="dian" content="Hi, Apa kabar?" />
  <AppChat sender="petanikode" content="Kabar Baik" />
  <AppChat sender="dian" content="Hi, Apa kabar?" />
  <AppChat sender="petanikode" content="Kabar Baik" />
  <AppChat sender="dian" content="Hi, Apa kabar?" />
  <AppChat sender="petanikode" content="Kabar Baik" />
  <AppChat sender="dian" content="Hi, Apa kabar?" />
  <AppChat sender="petanikode" content="Kabar Baik" />
  <AppChat sender="dian" content="Hi, Apa kabar?" />
  <AppChat sender="petanikode" content="Kabar Baik" />
 
  </div>
);
export default chat;
