import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Patterimg2 from '../img/pattern2.svg';


const PatternSection2 = () => {
    return (

        <div className=" ">
            <br />
            <Container fluid>
                <Row >

                    <Col className="">

                    <img src={Patterimg2} alt="Logo" />
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}
export default PatternSection2;