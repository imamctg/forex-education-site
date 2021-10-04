import React from 'react';
import { Button, Card } from 'react-bootstrap';

/* This is All Course in education menu of site */
const AllCourse = (props) => {
    const { name, duration, fee, img } = props.data;

    return (
        <div className="col-md-4">
            <div className="container">
                <Card className="mb-2 card shadow-lg" style={{ width: '18rem' }}>
                    <Card.Img className="card-image" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>Course Name: {name}</Card.Title>
                        <Card.Text>Course Duration: {duration}</Card.Text>
                        <Card.Title>Course Fee : $ {fee}</Card.Title>
                        <Button variant="info">Details</Button>
                    </Card.Body>
                </Card>


            </div>
        </div>

    );
};

export default AllCourse;