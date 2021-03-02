import { Toast } from 'bootstrap';
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

  ShowToast = () => {
    <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="pic"/>
        <strong className="mr-auto">Alden</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>Hello, this is  a toast</Toast.Body>
    </Toast>
  }


  render() {
    return (
      <div>
        <p>hello {this.state.name}</p>
        <button onClick={this.ShowToast}> Ubah Nama</button>
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


class Chat extends Component {
  render() {
    return (
      <div>
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
    )
  }
}

export default Chat;
