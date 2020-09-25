import { Link } from '@material-ui/core';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const PlacesCard = () => {

    const history = useHistory()
    const handleBook = () => {
        history.push("/Booking");

    }


    return (
        <div className="d-flex justify-content-around">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="../Image/Image-2.png" />
                <Card.Body>
                    <Card.Title>Cox's Bazar</Card.Title>
                    <Card.Text>
                        Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach,
                    </Card.Text>
                    <Link to="/booking">
                        <Button onClick={handleBook} variant="primary">Booking Here</Button>
                    </Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="../Image/Image-1.png" />
                <Card.Body>
                    <Card.Title>Sajek</Card.Title>
                    <Card.Text>
                        Sajek is a union located in the north of Chittagong Hill Tracts. Its under Baghaichori Upazila in Rangamati hill district,
                    </Card.Text>
                    <Link to="/booking">
                        <Button onClick={handleBook} variant="primary">Booking Here</Button>
                    </Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="../Image/Image-3.png" />
                <Card.Body>
                    <Card.Title>Sreemangal</Card.Title>
                    <Card.Text>
                        Sreemangal is a city in Sylhet Division in Bangladesh. ... Sreemangal is situated in Moulvibazar district in sylhet division.
                    </Card.Text>
                    <Link to="/booking">
                        <Button onClick={handleBook} variant="primary" >
                            Booking Here</Button>
                    </Link>
                </Card.Body>
            </Card>


        </div>

    );
};

export default PlacesCard;