import React from 'react'
import {Navbar, Container, Nav, Row, Col, Button, Image, Form} from "react-bootstrap"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaUserAlt } from "react-icons/fa"
import { MdLocationOn } from "react-icons/md"
import { MdEmail } from "react-icons/md"

import "../Style.css"
import PauseOnHover from './PauseOnHover';

export default function Home() {
  return (
    <>
        {/* Header */}
        <header className='port-background'>
            <div className='rectangle'>
                <Navbar collapseOnSelect expand="lg" variant="dark">
                    <Container className='p-2'>
                        <Navbar.Brand href="#home" className='fw-bold fs-2'>Port<span style={{color: '#E95A59'}}>folio</span></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto fw-bold">
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#aboutMe">About Me</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#contact" className="contact-me-nav ms-4" style={{
                                color: '#E95A59',
                                border: "2px solid #E95A59",
                                borderRadius: "8px",
                            }}>Contact Me</Nav.Link>
                        </Nav>
                        
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className='cover d-flex justify-content-center align-items-center flex-column'>
                    <Image src="./Image/selfImage.jpg" height="250px" width="250px" roundedCircle />
                    <h1 className='name fw-bold'>Sabiha Nasrin Jyoti</h1>
                </div>
                {/* <hr/><p>Scroll Down</p> */}
            </div>
        </header>

        {/* About me contanier */}
        <Container fluid className='about-me p-5' id="aboutMe">
            <Container>
                <Row>
                    <Col lg={4} sm={12}>Column</Col>
                    <Col lg={8} sm={12}>
                        <h5>Discover</h5>
                        <h2>About Me</h2>
                        <hr/>
                        <p>
                            Duo lorem dolores accusam et dolore dolore, accusam sadipscing et aliquyam eirmod consetetur sea ipsum at sed. Justo sit takimata stet kasd ipsum et amet nonumy et. Lorem consetetur et takimata amet amet et sit dolor sit, sit aliquyam sed ut lorem tempor et et consetetur ea, consetetur et accusam dolor et eirmod est tempor, gubergren tempor labore labore diam elitr, sit duo diam aliquyam sit justo sed sit sed no, consetetur dolor dolor lorem sit, ut accusam dolores sadipscing dolor aliquyam ipsum stet. Et ipsum aliquyam vero nonumy, erat sed gubergren aliquyam dolor gubergren. Amet amet dolores takimata ipsum.
                        </p>
                        <Row className="about-me-row mx-1 px-5 py-3">
                            <h6>Web Development Skills</h6>
                            <Col lg={6}>
                                <ul>
                                    <li>List 1</li>
                                    <li>List 1</li>
                                    <li>List 1</li>
                                    <li>List 1</li>
                                </ul>
                            </Col>
                            <Col lg={6}>
                                <ul>
                                    <li>List 1</li>
                                    <li>List 1</li>
                                    <li>List 1</li>
                                    <li>List 1</li>
                                </ul>
                            </Col>
                        </Row>
                        <Button className="about-me-button mt-2 ms-0" onClick={() => console.log("Primary")}>
                            Download My CV
                        </Button>
                    </Col>
                </Row>
            </Container>
            <div className='port-number-div d-flex justify-content-end'>
                <h1 className='port-numbers'>01</h1>
                <hr className='port-numbers-hr'/>
            </div>
        </Container>

        {/* Projects contanier */}
        <Container fluid className='projects p-5' id="projects">
            <Container>
                <h5>What I Designed</h5>
                <h2>Projects</h2>
                <hr/>
                <PauseOnHover />
            </Container>
            <div className='port-number-div d-flex justify-content-end'>
                <h1 className='port-numbers'>02</h1>
                <hr className='port-numbers-hr'/>
            </div>
        </Container>

        {/* Contact Me */}
        <Container fluid className='contact-me p-5' id="contact">
            <Container>
                <h5>Get Me in Touch</h5>
                <h2>Contact Me</h2>
                <hr/>
                <Row>
                    <Col lg={6} sm={12} className="mt-4">
                        <div className='mt-3'>
                            <Row className="mb-3">
                                <Col lg={1} className="ps-4 pt-2">
                                    <FaUserAlt className='fs-1'/>
                                </Col>
                                <Col lg={11}>
                                    <Row>
                                        <h5 className='d-inline ms-3'>Name</h5>
                                    </Row>
                                    <Row>
                                        <p className='d-inline-block ms-3'>Sabiha Nasrin Jyoti</p>
                                    </Row>
                                </Col>                                
                            </Row>
                            <Row className="mb-3">
                                <Col lg={1} className="ps-4 pt-2">
                                    <MdLocationOn className='fs-1'/>
                                </Col>
                                <Col lg={11}>
                                    <Row>
                                        <h5 className='d-inline ms-3'>Address</h5>
                                    </Row>
                                    <Row>
                                        <p className='d-inline-block ms-3'>Malibagh Chowdhurypara, Dhaka</p>
                                    </Row>
                                </Col>                                
                            </Row>
                            <Row className="mb-3">
                                <Col lg={1} className="ps-4 pt-2">
                                    <MdEmail className='fs-1'/>
                                </Col>
                                <Col lg={11}>
                                    <Row>
                                        <h5 className='d-inline ms-3'>Email</h5>
                                    </Row>
                                    <Row>
                                        <a className='d-inline-block ms-3 text-decoration-none text-white' href='mailto:sabiha.jyoti98@gmail.com'>sabiha.jyoti98@gmail.com</a>
                                    </Row>
                                </Col>                                
                            </Row>
                        </div>
                    </Col>
                    <Col lg={6} sm={12}>
                        <fieldset>
                            <legend>Have any questions? Let me know!</legend>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Row>
                                        <Col>
                                            <Form.Control type="text" placeholder="Name" required/>
                                        </Col>
                                        <Col>
                                            <Form.Control type="email" placeholder="Email" required/>
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Control type="text" placeholder="Subject" required/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="text" className='port-messege' required/>
                                </Form.Group>
                                <Button className='meg-button px-3' variant="primary" type="submit">
                                    Send
                                </Button>
                            </Form>
                        </fieldset>
                    </Col>
                </Row>
            </Container>
            <div className='port-number-div d-flex justify-content-end'>
                <h1 className='port-numbers'>03</h1>
                <hr className='port-numbers-hr'/>
            </div>
        </Container>
    </>
  )
}
