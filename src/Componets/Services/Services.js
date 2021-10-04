import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Courses from '../Courses/Courses';
import Footer from '../Footer/Footer';

const Service = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./CourseInfo.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div>
            <div className="m-5 container">
                <Row xs={1} md={3} className="g-4">
                    {
                        courses.map(course => <Courses key={course.course_id} course={course}></Courses>)
                    }
                </Row>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Service;