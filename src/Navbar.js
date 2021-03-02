import React, {Component} from 'react'
import {
    NavLink,
    HashRouter
} from 'react-router-dom'
import { Container, Navbar,NavDropdown,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import reactDom from 'react-dom';
import {useMediaQuery} from 'react-responsive';


 
function media () {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
      })
      const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
      const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
      })
      const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
      const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
}


export default class Nar extends Component {

    
    render() {
        return (
            <div>
                <HashRouter>
                    {media.isDesktopOrLaptop && <>
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
                    </>}{media.isTabletOrMobile && 
                              <Navbar bg="dark" variant="dark" fixed="top">
                              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                  <Navbar.Collapse id="responsive-navbar-nav">
                                          <Nav className="mx-auto">
                                          <Nav.Link href="#/">Beranda</Nav.Link>
                                          <Nav.Link href="#Misi">Misi</Nav.Link>
                                          <Nav.Link href="#Tour">Tour</Nav.Link>
                                          </Nav>
                          </Navbar.Collapse>
                      </Navbar>

                    }
              
                </HashRouter>
            </div>
        )
    }
}

// reactDom.render(
//     <Nar/>,
//     document.getElementById('nav')
// );

