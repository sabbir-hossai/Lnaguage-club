import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import './Apply.css'

const Apply = () => {
    return (
        <div>
            <div className="form-container container">
                <div className="row">
                    <div className="col-2"> </div>
                    <div className="col-8 applycation">
                        <h3>Application form</h3>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Control placeholder="First name" />
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Last name" />
                                </Col>
                            </Row>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" />
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <Button className="btn btn-primary" type="submit">Sign up</Button>
                                </Col>
                            </Form.Group>
                        </Form>

                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Apply;