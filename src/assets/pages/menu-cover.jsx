import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LogoMenu from '../img/logo-menu.svg';


const MenuCover = () => {
    return (

        <div className=" ">
            <br />
            <Container className="Logo-Menu">
                <Row >

                    <Col className="">

                    <img src={LogoMenu} alt="Logo" />
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}
export default MenuCover;