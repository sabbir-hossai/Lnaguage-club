import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, } from 'react-bootstrap';
import './Courses.css';

const Courses = (props) => {
    const { name, img, course_free } = props.course;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img className="coursesImg" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>Course free: {course_free}Tk </Card.Text>
                        <Button className="btn btn-primary">Enroll Now</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Courses;