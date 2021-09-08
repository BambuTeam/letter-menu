import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Patterimg from '../img/pattern.svg';


const PatternSection = () => {
    return (

        <div className=" ">
            <br />
            <Container fluid>
                <Row >

                    <Col className="">

                    <img src={Patterimg} alt="Logo" />
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}
export default PatternSection;