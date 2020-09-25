import React from 'react';
import './Booking.css';
import { Card, Form } from 'react-bootstrap';
import { useHistory } from 'react-router';


const Booking = () => {
    const history = useHistory()
    const handleBookDetails = () => {
        history.push("/BookingDetails")
    }
    // const [selectDate, setSelectDate] = react.useState(new setSelectDate(''));

    // const handleDateChange = (date) => {
    //     setSelectDate(date);
    // };

    return (
        <div className='container'>
            <div className='col-md-6'>
                <div className='bookingL'>
                    <Card style={{ width: '24rem' }}>
                        <Card.Body>
                            <Card.Title>Cox's Bazar</Card.Title>
                            <Card.Text>
                                Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className='col-md-6'>
                <Form className="bg-light w-100 h-150 p-5">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Origin</Form.Label>
                        <Form.Control type="name" placeholder="Name" />

                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Destination</Form.Label>
                        <Form.Control className="bg-light custom-input-2" type="destination" placeholder="destination" />
                    </Form.Group>


                    <div className="d-flex justify-content-around">
                        <label for="">From</label>
                        <label for="">To</label>
                    </div>
                    <div className="d-flex justify-content-around">
                        <input className="bg-light form-control mr-1" type="date" name="" id="" required></input>
                        <input className="bg-light form-control mr-1" type="date" name="" id="" required></input>
                    </div>
                    <br />
                    <input type="submit" value="Start Booking" onClick={handleBookDetails} className="btn btn-warning btn-lg btn-block"/>
                </Form>
            </div>

        </div>
    );
};

export default Booking;