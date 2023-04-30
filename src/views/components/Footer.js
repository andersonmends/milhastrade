import React from "react";
import { Card, Container} from 'react-bootstrap';

function Footer () {
   
        return (
            <Card.Footer className="text-white bg-primary">
                <Container>
                    <div className="row py-3">
                        <div className="col-md-6 text-left">
                            Designed by{" "}
                            <a href="#" target="_blank" className='text-white'>
                                Midhall
                            </a>
                            &#169; {new Date().getFullYear()}
                        </div>
                        <div className="col-md-6 text-right">
                            <div>
                                <span>Follow Us: </span>
                                <a href="#" target="_blank">
                                    <i className="fab fa-facebook-f px-3 text-white" />
                                </a>
                                <a href="#" target="_blank">
                                    <i className="fab fa-twitter pr-3 text-white" />
                                </a>
                                <a href="#" target="_blank">
                                    <i className="fab fa-youtube pr-3 text-white" />
                                </a>
                                <a href="#" target="_blank">
                                    <i className="fab fa-github pr-3 text-white" />

                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </Card.Footer>
        );
    
}

export default Footer;
