import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';





const ListComida = () => {
    return (

        <div className="container_menu1">
            <br />
            <Container fluid className="Container_menu1">
                <Row >

                    <Col xs={12} md={12} lg={12} className="Btn_Style_2 ">
                    <Button>
                        DESAYUNOS
                    </Button>
                    </Col>
                </Row>
                <Row >

                    <Col xs={12} md={12} lg={12} className="Btn_Style_2 ">
                    <Button>
                        ENTRADAS
                    </Button>
                    </Col>
                </Row>
                <Row >

                    <Col xs={12} md={12} lg={12} className="Btn_Style_2">
                    <Button>
                        PLATO PRINCIPAL
                    </Button>
                    </Col>
                </Row>
                <Row >

                    <Col xs={12} md={12} lg={12} className="Btn_Style_2 ">
                    <Button>
                        MENÚ DE NIÑOS
                    </Button>
                    </Col>
                </Row>
                <Row >

                    <Col xs={12} md={12} lg={12} className="Btn_Style_2 ">
                    <Button>
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