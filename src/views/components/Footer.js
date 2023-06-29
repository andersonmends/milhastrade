import React from "react";
import { Row, Col, Container, Card} from 'react-bootstrap';

function Footer () {
   
        return (
            <Card.Footer className="text-white bg-primary mt-4">
                <Container>

                    <Row>
                        <Col>
                            Designed by{" "} 
                            <a href="#" target="_blank" className='text-white'>Midhall</a>&#169; {new Date().getFullYear()}
                        </Col>
                        <Col className="text-right">
                            Follow Us: 
                            <a href="#" target="_blank">
                                <i className="fab fa-facebook-f px-3 text-white" />
                            </a>
                            <a href="#" target="_blank">
                                <i className="fab fa-twitter pr-3 text-white" />
                            </a>

                            <a href="https://instagram.com/milhas.trade?igshid=NTc4MTIwNjQ2YQ==" target="_blank">
                                <i className="fab fa-instagram pr-3 text-white" />

                            </a>
                        </Col>
                    </Row>
                   
                </Container>
            </Card.Footer>
        );
    
}

export default Footer;
