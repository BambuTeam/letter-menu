import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Icorestaurante from '../img/iconos/ico-restaurante.svg';
import Icobebida from '../img/iconos/ico-bebidas.svg';




const MenuYBebidas = () => {
    return (

        <div className="container_menu1">
            <br />
            <Container fluid className="Container_menu1">
                <Row >

                    <Col className="Btn_Style_1 border-rigth">
                    <img src={Icorestaurante} alt="ico-restaurante" />


                    <Button>
                       COMIDA
                    </Button>
                    
                    </Col>
                    <Col className="Btn_Style_1">
                    <img src={Icobebida} alt="ico-restaurante" />
                    <Button>
                    BEBIDAS
                    </Button>
                   


                    
                    

                    
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}
export default MenuYBebidas;