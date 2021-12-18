import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ContactForm from '../ContactForm/ContactForm';

const Contact = () => {
    return (
        <div className="bg-dark pb-5">
            <Container>
                <p className="text pt-5">CONTACT</p>
                <h1 className="text-white">Contact With Me</h1>

                <Row className="g-4 py-5 align-items-center">
                    <Col xs={11} md={10} lg={5} className="mx-auto px-xl-5">
                        <Card className="p-3">
                            <Card.Img
                                variant="top"
                                src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_14/1554952/hank-shake-continue-today-main-200403.jpg"
                                className="img-fluid" />
                            <Card.Body className="text-start">
                                <Card.Title>Lutfor Rahman</Card.Title>
                                <Card.Subtitle className="text mb-3">
                                    Junior Web Developer
                                </Card.Subtitle>
                                <Card.Text>
                                    I like to create interactive website with fun, Open minded people. Feel free to contact with me
                                </Card.Text>
                                <Card.Text>
                                    I'd &#x1F496; to help you
                                </Card.Text>
                                <Card.Text>
                                    Phone: +880 1793 054 198
                                </Card.Text>
                                {/* <Card.Text className="text mt-5">
                                    Find With Me
                                </Card.Text>
                                <Card.Link href="https://www.linkedin.com/in/md-lutfor-rahman-1b78a9216/" target="_blanck">
                                    <i className="fab fa-linkedin"></i>
                                </Card.Link>
                                <Card.Link href="https://github.com/lutfor779" target="_blanck">
                                    <i className="bi bi-github"></i>
                                </Card.Link>
                                <Card.Link href="https://www.facebook.com/profile.php?id=100060296948064" target="_blanck">
                                    <i className="fab fa-facebook"></i>
                                </Card.Link> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={11} md={10} lg={6} className="mx-auto">
                        <Card className="px-3">
                            <Card.Body>
                                <ContactForm />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Contact;