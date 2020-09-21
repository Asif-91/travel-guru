import React from 'react';
import './FrontPage.css'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import PlacesCard from '../../PlacesCard/PlacesCard';
//import PlacesCard from '../../PlacesCard/PlacesCard';

const FrontPage = () => {
    return (
        <div className="travel-image">
            <Navbar bg="transparent" variant="primary">
                <Navbar.Brand href="#home">
                    <img src="/Logo.png" alt="" />
                </Navbar.Brand>
                <Form inline>
                    <FormControl type="text" placeholder="Search your destination" className="ml-sm-2" />
                </Form>
                <Nav className="ml-auto">
                    <Nav.Link href="#home">News</Nav.Link>
                    <Nav.Link href="#home">Destination</Nav.Link>
                    <Nav.Link href="#features">Blog</Nav.Link>
                    <Nav.Link href="#pricing">Contact</Nav.Link>
                </Nav>
                <Form inline>
                    <Button variant="outline-primary">Log in</Button>
                </Form>

            </Navbar>
            <PlacesCard></PlacesCard>

        </div>
    );
};

export default FrontPage;