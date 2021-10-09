import React from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import PatternMenu from './PatternMenu';








const Menuninos= () => {
    return (

        <div className="content_Entradas" id="Menuninos">
            <br />
            <Container className="Container_Entradas">
                <Row >
                <Col xs={10} md={12} lg={10} className="Style_Entradas_List" >
                <h1>MENU DE NIÑOS</h1>
                <p className="Color_gold">Menores de 10 años </p>
                    </Col>
                </Row>

                <div className="Space_Style"></div>

                {/* D E S A Y U N O S LIST */}

                <Container>
                <Row>
                <Col xs={10} md={12} lg={10} className="Style_Entradas_List" >
                <h2>Desayuno Americano Infantil  </h2>
                </Col>
                <Col xs={2} md={12} lg={2} className="Style_Entradas_List F_rigth" >
                <h2>Q.55</h2>
                </Col>

                </Row>
                <Row>
                <Col xs={12} md={12} lg={12} className="Style_Entradas_List" >
                    <p>
                    Un huevo al gusto, papas salteadas, jamón o tocino y jugo de naranja.
                    </p>
                    </Col>
                </Row>
                </Container>
                
                {/* E N D D E S A Y U N O S LIST */}

                 {/* D E S A Y U N O S LIST */}

                 <Container>
                <Row>
                <Col xs={10} md={12} lg={10} className="Style_Entradas_List" >
                <h2>Mini Panqueques  </h2>
                </Col>
                <Col xs={2} md={12} lg={2} className="Style_Entradas_List F_rigth" >
                <h2>Q.55</h2>
                </Col>

                </Row>
                <Row>
                <Col xs={12} md={12} lg={12} className="Style_Entradas_List" >
                    <p>
                    Masa de vainilla y granola. Acompañados de jamón o tocino y jugo de naranja.	

                    </p>
                    </Col>
                </Row>
                </Container>
                
                {/* E N D D E S A Y U N O S LIST */}
                <Row>
                <Col xs={10} md={12} lg={6} className="Style_line_gold" >
                <div></div>
                </Col>
                </Row>
                <br />
                {/* D E S A Y U N O S LIST */}

                <Container>
                <Row>
                <Col xs={10} md={12} lg={10} className="Style_Entradas_List" >
                <h2>Pizza de Jamón y Queso  </h2>
                </Col>
                <Col xs={2} md={12} lg={2} className="Style_Entradas_List F_rigth" >
                <h2>Q.45</h2>
                </Col>

                </Row>
                <Row>
                <Col xs={12} md={12} lg={12} className="Style_Entradas_List" >
                    <p>
                    Mini pizza al estilo tradicional.		
                    </p>
                    </Col>
                </Row>
                </Container>
                
                
                {/* E N D D E S A Y U N O S LIST */}

                {/* D E S A Y U N O S LIST */}

                <Container>
                <Row>
                <Col xs={10} md={12} lg={10} className="Style_Entradas_List" >
                <h2>Chicken Fingers  </h2>
                </Col>
                <Col xs={2} md={12} lg={2} className="Style_Entradas_List F_rigth" >
                <h2>Q.55</h2>
                </Col>

                </Row>
                <Row>
                <Col xs={12} md={12} lg={12} className="Style_Entradas_List" >
                    <p>
                    Deditos de pollo empanizados acompañados de papas fritas.	
                    </p>
                    </Col>
                </Row>
                </Container>
                
                {/* E N D D E S A Y U N O S LIST */}

                 {/* D E S A Y U N O S LIST */}

                 <Container>
                <Row>
                <Col xs={10} md={12} lg={10} className="Style_Entradas_List" >
                <h2>Mozzarella Sticks  </h2>
                </Col>
                <Col xs={2} md={12} lg={2} className="Style_Entradas_List F_rigth" >
                <h2>Q.55</h2>
                </Col>

                </Row>
                <Row>
                <Col xs={12} md={12} lg={12} className="Style_Entradas_List" >
                    <p>
                    Bastoncitos de queso mozzarella empanizados, acompañados de salsa marinara.	
                    </p>
                    </Col>
                </Row>
                </Container>
                
                {/* E N D D E S A Y U N O S LIST */}

                {/* D E S A Y U N O S LIST */}

                <Container>
                <Row>
                <Col xs={10} md={12} lg={10} className="Style_Entradas_List" >
                <h2>Mini Spaghetti a la Bolognesa</h2>
                </Col>
                <Col xs={2} md={12} lg={2} className="Style_Entradas_List F_rigth" >
                <h2>Q.55</h2>
                </Col>

                </Row>
                <Row>
                <Col xs={12} md={12} lg={12} className="Style_Entradas_List" >
                    <p>
                    Nido de pasta italiana con salsa de tomate y carne.		
                    </p>
                   
                    </Col>
                </Row>
                </Container>
                 {/* D E S A Y U N O S LIST */}
                 {/* D E S A Y U N O S LIST */}

                <Container>
                <Row>
                <Col xs={10} md={12} lg={10} className="Style_Entradas_List" >
                <h2>Hot Dog </h2>
                </Col>
                <Col xs={2} md={12} lg={2} className="Style_Entradas_List F_rigth" >
                <h2>Q.40</h2>
                </Col>

                </Row>
                <Row>
                <Col xs={12} md={12} lg={12} className="Style_Entradas_List" >
                    <p>
                    Salchicha, ketchup, mayonesa y mostaza	
                    </p>
                   
                    </Col>
                </Row>
                </Container>
                 {/* D E S A Y U N O S LIST */}
            </Container>
            <div>
            <PatternMenu />
            </div>
           

            
           


        


        </div>



        

        
        
    )
}
export default Menuninos;