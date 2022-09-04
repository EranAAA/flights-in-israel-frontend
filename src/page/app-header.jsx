import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import 'bootstrap/dist/css/bootstrap.min.css';

export const AppHeader = () => {
   return (
      <Navbar collapseOnSelect expand="lg" bg="light" className="app-header" >
         <Container>
            <h1 >Flights In Israel</h1>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
         
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me my-nav">
                  
                  <Nav.Link eventKey="1" as={Link} to="/">Home</Nav.Link>
                  <Nav.Link eventKey="2" as={Link} to="/online">Online</Nav.Link>

                  <NavDropdown title="History" id="basic-nav-dropdown">
                     <Nav.Link eventKey="3" as={Link} to="/departure">Departure History</Nav.Link>
                     <Nav.Link eventKey="4" as={Link} to="/arrival">Arrival History</Nav.Link>
                  </NavDropdown>

                  <Nav.Link eventKey="5" as={Link} to="/dashboard">Dashboard</Nav.Link>

               </Nav>
            </Navbar.Collapse>

         </Container>
      </Navbar>
   );
}


