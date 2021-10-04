import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import './Home.css';
import classrom from '../../images/classroom.jpg';
import laguages from '../../images/laguages.jpg';
import Button from '@restart/ui/esm/Button';
import Footer from '../Footer/Footer';


const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./CourseFour.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);
    return (
        <div className="home-body ">
            <div>
                <Card.Img className="home-img" variant="top" src={classrom} alt="" />
            </div>
            <div className="container">
                <div className="home-container row mt-5 mb-5  ">
                    <div className="col-6">
                        <Row xs={1} md={2} className="g-5">
                            {courses.map(course => <Col>
                                <Card>
                                    <Card.Img variant="top" src={course.img} />
                                    <Card.Body>
                                        <Card.Title> {course.name}</Card.Title>
                                        <Card.Text>Course free: {course.course_free}Tk </Card.Text>
                                        <Button className="btn btn-primary">Enroll Now</Button>
                                    </Card.Body>
                                </Card>
                            </Col>)}
                        </Row>
                    </div>
                    <div className="col-6">
                        <img src={laguages} alt="" />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div >

    );
};

export default Home;