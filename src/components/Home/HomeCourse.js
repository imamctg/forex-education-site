import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Home.css'

/* Only Four Course details here on Home page */
const HomeCourse = (props) => {
    const { img, name, duration, fee } = props.data;

    return (
        <div className="col-md-4 ">
            <Card className="mb-2 card shadow-lg " style={{ width: '18rem' }}>
                <Card.Img className="card-image" variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Course Name: {name}</Card.Title>
                    <Card.Text>Course Duration: {duration}</Card.Text>
                    <Card.Title>Course Fee : $ {fee}</Card.Title>
                    <Button variant="info">Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default HomeCourse;