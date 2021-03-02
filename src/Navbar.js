import React, {Component} from 'react'
import {
    NavLink,
    HashRouter
} from 'react-router-dom'
import { Container, Navbar,NavDropdown,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import reactDom from 'react-dom';

export default class Nar extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                <Navbar bg="dark" variant="dark" fixed="bottom">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                            <Nav.Link href="#/">Beranda</Nav.Link>
                            <Nav.Link href="#Misi">Misi</Nav.Link>
                            <Nav.Link href="#Tour">Tour</Nav.Link>
                            </Nav>
            </Navbar.Collapse>
        </Navbar>
                </HashRouter>
            </div>
        )
    }
}

// reactDom.render(
//     <Nar/>,
//     document.getElementById('nav')
// );

