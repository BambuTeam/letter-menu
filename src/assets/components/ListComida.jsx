import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';







const ListComida = () => {
    return (

        <div className="container_menu1">
            <br />
            <Container fluid className="Container_menu1">
                <Row >

                    <Col xs={12} md={12} lg={12} className="Btn_Style_2 ">
                    
                    <Button href='#Desayuno_bebidas' >
                        DESAYUNOS
                    </Button>
                    
                    </Col>
                </Row>
                <Row >

                    <Col xs={12} md={12} lg={12} className="Btn_Style_2 ">
                    <Button href='#Entradas_click'>
                        ENTRADAS
                    </Button>
                    </Col>
                </Row>
                <Row >

                    <Col xs={12} md={12} lg={12} className="Btn_Style_2">
                    <Button href='#PPrincipales_click'>
                        PLATO PRINCIPAL
                    </Button>
                    </Col>
                </Row>
                <Row >

                    <Col xs={12} md={12} lg={12} className="Btn_Style_2 ">
                    <Button href='#Menuninos'>
                        MENÚ DE NIÑOS
                    </Button>
                    </Col>
                </Row>
                <Row >

                    <Col xs={12} md={12} lg={12} className="Btn_Style_2 ">
                    <Button href='#Postres'>
                        POSTRES
                    </Button>
                    </Col>
                </Row>
                
            </Container>
            <br />
        </div>
    )
}
export default ListComida;