import React from 'react';
import { Col, Container, Row} from 'react-bootstrap';





const Desayunos = () => {
    return (

        <div className="content_desayunos">
            <br />
            <Container fluid className="Container_desayuno">
                <Row >

                    <Col xs={12} md={12} lg={12} className="Btn_Style_2 ">
                    <h1>DESAYUNOS</h1>
                    </Col>
                    <div>
                    <h3>Disponible hasta las 11:00 a.m.</h3>
                
                    <h4>Incluyen jugo natural pequeño, café de la finca o té,<br />
                        pan o tortillas, mantequilla y mermelada.</h4>
                    </div>
                </Row>

                <div className="Space_Style"></div>

                {/* D E S A Y U N O S LIST */}

                <Container>
                <Row>
                <Col xs={12} md={12} lg={10} className="Style_Desayuno_List" >
                <h2>Plato de Frutas</h2>
                </Col>
                <Col xs={12} md={12} lg={2} className="Style_Desayuno_List F_rigth" >
                <h2>Q.65</h2>
                </Col>

                </Row>
                <Row>
                <Col xs={12} md={12} lg={12} className="Style_Desayuno_List" >
                    <p>
                    Frutas de la temporada acompañadas de yogurt natural, <br />
                    granola y miel.
                    </p>
                    </Col>
                </Row>
                </Container>
                
                {/* E N D D E S A Y U N O S LIST */}

                 {/* D E S A Y U N O S LIST */}

                 <Container>
                <Row>
                <Col xs={12} md={12} lg={10} className="Style_Desayuno_List" >
                <h2>Típico de la Finca</h2>
                </Col>
                <Col xs={12} md={12} lg={2} className="Style_Desayuno_List F_rigth" >
                <h2>Q.75</h2>
                </Col>

                </Row>
                <Row>
                <Col xs={12} md={12} lg={12} className="Style_Desayuno_List" >
                    <p>
                    Dos huevos al gusto, acompañados de salsa ranchera, frijoles <br />
                    queso blanco y plátanos fritos.
                    </p>
                    </Col>
                </Row>
                </Container>
                
                {/* E N D D E S A Y U N O S LIST */}

                {/* D E S A Y U N O S LIST */}

                <Container>
                <Row>
                <Col xs={12} md={12} lg={10} className="Style_Desayuno_List" >
                <h2>Desayuno Finquero</h2>
                </Col>
                <Col xs={12} md={12} lg={2} className="Style_Desayuno_List F_rigth" >
                <h2>Q.110</h2>
                </Col>

                </Row>
                <Row>
                <Col xs={12} md={12} lg={12} className="Style_Desayuno_List" >
                    <p>
                    Dos huevos al gusto montados sobre 4 oz. de carne, acompañados <br />
                    de salsa ranchera, frijoles, queso fresco y plátanos fritos.
                    </p>
                    </Col>
                </Row>
                </Container>
                
                {/* E N D D E S A Y U N O S LIST */}

                {/* D E S A Y U N O S LIST */}

                <Container>
                <Row>
                <Col xs={12} md={12} lg={10} className="Style_Desayuno_List" >
                <h2>Americano</h2>
                </Col>
                <Col xs={12} md={12} lg={2} className="Style_Desayuno_List F_rigth" >
                <h2>Q.75</h2>
                </Col>

                </Row>
                <Row>
                <Col xs={12} md={12} lg={12} className="Style_Desayuno_List" >
                    <p>
                    Dos huevos al gusto acompañados de tocino, jamón o <br />
                    salchicha y papas salteadas con hierbas.
                    </p>
                    </Col>
                </Row>
                </Container>
                
                {/* E N D D E S A Y U N O S LIST */}

                 {/* D E S A Y U N O S LIST */}

                 <Container>
                <Row>
                <Col xs={12} md={12} lg={10} className="Style_Desayuno_List" >
                <h2>Divorciados</h2>
                </Col>
                <Col xs={12} md={12} lg={2} className="Style_Desayuno_List F_rigth" >
                <h2>Q.80</h2>
                </Col>

                </Row>
                <Row>
                <Col xs={12} md={12} lg={12} className="Style_Desayuno_List" >
                    <p>
                    Dos huevos fritos con salsa verde y salsa roja sobre <br />
                    sincronizada de jamón y queso con frijoles y plátanos fritos.
                    </p>
                    </Col>
                </Row>
                </Container>
                
                {/* E N D D E S A Y U N O S LIST */}

                {/* D E S A Y U N O S LIST */}

                <Container>
                <Row>
                <Col xs={12} md={12} lg={10} className="Style_Desayuno_List" >
                <h2>Benedictinos</h2>
                </Col>
                <Col xs={12} md={12} lg={2} className="Style_Desayuno_List F_rigth" >
                <h2>Q.80</h2>
                </Col>

                </Row>
                <Row>
                <Col xs={12} md={12} lg={12} className="Style_Desayuno_List" >
                    <p>
                    Dos huevos poshé con jamón virginia, sobre pan muffin y salsa <br />
                    holandes acompañado de tomates asados y papas salteadas <br />
                    con hierbas.
                    </p>
                    <p>
                    Con salmón Q.90
                    </p>
                    </Col>
                </Row>
                </Container>
                
                {/* E N D D E S A Y U N O S LIST */}

                {/* D E S A Y U N O S LIST */}

                <Container>
                <Row>
                <Col xs={12} md={12} lg={10} className="Style_Desayuno_List" >
                <h2>Croque Madame</h2>
                </Col>
                <Col xs={12} md={12} lg={2} className="Style_Desayuno_List F_rigth" >
                <h2>Q.80</h2>
                </Col>

                </Row>
                <Row>
                <Col xs={12} md={12} lg={12} className="Style_Desayuno_List" >
                    <p>
                    Sándwich francés elaborado con pan de molde, jamón virginia y <br />
                    queso gruyere gratinado al horno cubierto con huevo frito. <br />
                    Acompañado de papas salteadas con hierbas.
                    </p>
                    </Col>
                </Row>
                </Container>
                
                {/* E N D D E S A Y U N O S LIST */}










                
            </Container>
            <br />
        </div>
    )
}
export default Desayunos;