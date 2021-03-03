import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from './pages/dashboard';
import Chat from './pages/chat';
import Signup from './pages/signup';
import Login from './pages/login';
import { auth } from './services/firebase';
// import './styles.css';


function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated === true ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
      }
    />
  );
}

function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated === false ? (
          <Component {...props} />
        ) : (
            <Redirect to="/chat" />
          )
      }
    />
  );
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      loading: true
    };
  }

  componentDidMount() {
    auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          loading: false
        });
      }
    });
  }

  render() {
    return this.state.loading === true ? (
      <div className="spinner-border text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    ) : (
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute
              path="/chat"
              authenticated={this.state.authenticated}
              component={Chat}
            />
            <PublicRoute
              path="/signup"
              authenticated={this.state.authenticated}
              component={Signup}
            />
            <PublicRoute
              path="/login"
              authenticated={this.state.authenticated}
              component={Login}
            />
          </Switch>
        </Router>
      );
  }
}

export default App;

































// import { Toast , Row, Col, Button, Alert } from 'bootstrap';
// import React, { Component, useState } from 'react'
// import { Container, Navbar } from 'react-bootstrap';
// import { NavLink,HashRouter, Route } from 'react-router-dom';
// import Nar from './Navbar';
// import Home from './pages/home';
// import Tour from './pages/tour';
// import Misi from './pages/misi';
// import Title1 from './pages/Title1';
// import Title2 from './pages/Title2';


//  class App extends Component {
//   constructor(){
//     super();
//     this.state = {name : "Aldien"};  
//   }
  
//   ChangeName = () => {
//     if(this.state.name == "Aldien"){
//       this.setState({
//         name : "Nasrun"
//       });
//     }else{
//       this.setState({
//         name : "Aldien"
//       });
//     }
//   }


//   render() {
//     return (
//       <div>
//         <p>hello {this.state.name}</p>
//         <button onClick={this.ChangeName}> Ubah Nama</button>
//       <hr></hr>
//       </div>
//     );
//   }
// }

// class TheHeader extends Component{
// render(){
//   return(
//       <div >
//         <HashRouter>
//         <Navbar bg="dark">
//           <h5 className="text-white">WRLD</h5>
//         </Navbar>
//         <div className="mx-2 my2">
//           <ul>
//             <li><NavLink to="/aku">Aku</NavLink></li>
//             <li></li>
//             <li></li>
//           </ul>
//         </div>
//         </HashRouter>
//       </div>
//   );
// }
// }



// class AppChat extends Component {
//   render() {
//     return (
//       <div>

//         <pre>{this.props.sender}</pre>
//         <p>{this.props.content}</p>
//         <hr></hr>
//       </div>
//     )
//   }
// }


// class Chat extends Component {
//   render() {
//     return (
//       <div>

//         <HashRouter>
//         <Nar/>
//         <Container>
//         <div className="content">
//           <Route exact path="/" component={Home}/>
//           <Route  path="/tour" component={Tour}/>
//           <Route  path="/misi" component={Misi}/>
//           <Route  path="/title1" component={Title1}/>
//           <Route  path="/title2" component={Title2}/>
//         </div>
//         </Container>
//         </HashRouter>
//       </div>
//     )
//   }
// }

// export default Chat;
