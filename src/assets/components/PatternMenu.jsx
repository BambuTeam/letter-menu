import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PatternMenuimg from '../img/patternMenu.svg';


const PatternMenu = () => {
    return (

        <div className="Patter_img_Menu">
            <br />
            <Container fluid>
                <Row >

                    <Col className="">

                    <img src={PatternMenuimg} alt="Logo" />
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}
export default PatternMenu;