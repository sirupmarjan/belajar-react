import React, {Component} from 'react'
import {
    NavLink,
    HashRouter
} from 'react-router-dom'
import { Container, Navbar,NavDropdown,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import reactDom from 'react-dom';
import MediaQuery, {useMediaQuery} from 'react-responsive';


export default class Nar extends Component {

    
    render() {
        return (
            <div>
                <HashRouter>
                    {/* Mobile view */}
                 <MediaQuery maxWidth={1224} >
                        <Navbar bg="dark" variant="dark" fixed="top">
                            <Nav className="w-100">
                        <Nav.Link href="#Tour" className="mr-auto"> back</Nav.Link>       
                        <Navbar.Brand href="#/" className="mx-auto">Alden</Navbar.Brand>                
                        <Nav.Link href="#Misi" className="ml-auto">next</Nav.Link>       
                            </Nav>
                </Navbar>
                 </MediaQuery>
                 {/* Desktop View */}
                <MediaQuery minWidth={1224} >
                              <Navbar bg="dark" variant="dark" fixed="top">
                              <Navbar.Brand href="#/">Alden</Navbar.Brand> 
                              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                  <Navbar.Collapse id="responsive-navbar-nav">
                                          <Nav className="ml-auto">
                                          <Nav.Link href="#/">Beranda</Nav.Link>
                                          <Nav.Link href="#Misi">Misi</Nav.Link>
                                          <Nav.Link href="#Tour">Tour</Nav.Link>
                                          </Nav>
                          </Navbar.Collapse>
                      </Navbar>            
                </MediaQuery>
                </HashRouter>
            </div>
        )
    }
}

// reactDom.render(
//     <Nar/>,
//     document.getElementById('nav')
// );

