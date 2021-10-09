import React from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import PatternMenu from './PatternMenu';



const Postres= () => {
    return (

        <div className="content_Entradas" id="Postres">
            <br />
            <Container className="Container_Entradas">
                <Row >
                <Col xs={10} md={12} lg={10} className="Style_Entradas_List" >
                <h1>POSTRES</h1>
                
                    </Col>
                </Row>

                <div className="Space_Style"></div>

                {/* D E S A Y U N O S LIST */}

                <Container>
                <Row>
                <Col xs={10} md={12} lg={10} className="Style_Entradas_List" >
                <h2>Amaretto Pound Cake  </h2>
                </Col>
                <Col xs={2} md={12} lg={2} className="Style_Entradas_List F_rigth" >
                <h2>Q.49</h2>
                </Col>

                </Row>
                <Row>
                <Col xs={12} md={12} lg={12} className="Style_Entradas_List" >
                    <p>
                    Pastel casero cubierto con un glasé de almendras <br /> acompañado con helado de vainilla.	
                    </p>
                    </Col>
                </Row>
                </Container>
                
                {/* E N D D E S A Y U N O S LIST */}

                 {/* D E S A Y U N O S LIST */}

                 <Container>
                <Row>
                <Col xs={10} md={12} lg={10} className="Style_Entradas_List" >
                <h2>Alfajor Gigante de Maracuyá</h2>
                </Col>
                <Col xs={2} md={12} lg={2} className="Style_Entradas_List F_rigth" >
                <h2>Q.45</h2>
                </Col>

                </Row>
                <Row>
                <Col xs={12} md={12} lg={12} className="Style_Entradas_List" >
                    <p>
                    Relleno de crema de maracuyá cosechado en la finca, ideal para compartir.
                    </p>
                    </Col>
                </Row>
                </Container>
                
                {/* E N D D E S A Y U N O S LIST */}
                >
                <br />
                {/* D E S A Y U N O S LIST */}

                <Container>
                <Row>
                <Col xs={10} md={12} lg={10} className="Style_Entradas_List" >
                <h2>Pecan Pie </h2>
                </Col>
                <Col xs={2} md={12} lg={2} className="Style_Entradas_List F_rigth" >
                <h2>Q.45</h2>
                </Col>

                </Row>
                <Row>
                <Col xs={12} md={12} lg={12} className="Style_Entradas_List" >
                    <p>
                    Tradicional receta de pecanas y miel de maple, <br /> acompañado de helado de
                    Vainilla y salsa de arequipe.			
                    </p>
                    </Col>
                </Row>
                </Container>
                
                
                {/* E N D D E S A Y U N O S LIST */}

                {/* D E S A Y U N O S LIST */}

                <Container>
                <Row>
                <Col xs={10} md={12} lg={10} className="Style_Entradas_List" >
                <h2>Brownie San Cayetano </h2>
                </Col>
                <Col xs={2} md={12} lg={2} className="Style_Entradas_List F_rigth" >
                <h2>Q.45</h2>
                </Col>

                </Row>
                <Row>
                <Col xs={12} md={12} lg={12} className="Style_Entradas_List" >
                    <p>
                    Deliciosa receta de la finca, relleno de dulce de leche y <br /> nueces.
                    Acompañado de helado de vainilla.
	
                    </p>
                    </Col>
                </Row>
                </Container>
                
                {/* E N D D E S A Y U N O S LIST */}

                 {/* D E S A Y U N O S LIST */}

                 <Container>
                <Row>
                <Col xs={10} md={12} lg={10} className="Style_Entradas_List" >
                <h2>Cheesecake </h2>
                </Col>
                <Col xs={2} md={12} lg={2} className="Style_Entradas_List F_rigth" >
                <h2>Q.45</h2>
                </Col>

                </Row>
                <Row>
                <Col xs={12} md={12} lg={12} className="Style_Entradas_List" >
                    <p>
                    Tradicional receta de la finca que consiste en una mezcla <br /> de queso suave, corteza de cítricos, azúcar y crocante de <br />galleta triturada, bañado en salsa de frutos rojos.
                    </p>
                    </Col>
                </Row>
                </Container>
                
                {/* E N D D E S A Y U N O S LIST */}

                {/* D E S A Y U N O S LIST */}

                <Container>
                <Row>
                <Col xs={10} md={12} lg={10} className="Style_Entradas_List" >
                <h2>Variedad de Helados	</h2>
                </Col>
                <Col xs={2} md={12} lg={2} className="Style_Entradas_List F_rigth" >
                <h2>Q.25</h2>
                </Col>

                </Row>
                
                </Container>
                
            </Container>
            <div>
            <PatternMenu />
            </div>
           

            
           


        


        </div>



        

        
        
    )
}
export default Postres;