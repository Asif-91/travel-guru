import React from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';


const Header = () => {
    return (
        <div className="">
            <Navbar bg="transparent" variant="transparent">
                <Navbar.Brand href="#home">
                    <img src="../../Logo.png" alt="" />
                </Navbar.Brand>
                <Form inline style={{marginLeft: '220px'}}>
                    <FormControl  type="text" placeholder="Search your destination" className="ml-sm-4" />
                </Form>
                <Nav className="ml-auto"  style={{marginRight: '40px'}}>
                    <Nav.Link href="#home" style={{marginRight: '40px'}}>News</Nav.Link>
                    <Nav.Link href="#destination" style={{marginRight: '40px'}}>Destination</Nav.Link>
                    <Nav.Link href="#features" style={{marginRight: '40px'}}>Blog</Nav.Link>
                    <Nav.Link href="#pricing">Contact</Nav.Link>
                </Nav>
                <Form inline>
                    <button type="button" class="btn btn-warning">Log in</button>
                </Form>

            </Navbar>
        </div>
    );
};

export default Header;