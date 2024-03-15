import React from 'react'
import { Navbar, Container, Nav, Row, Col, Button, Image, Form } from "react-bootstrap"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaUserAlt } from "react-icons/fa"
import { MdLocationOn } from "react-icons/md"
import { MdEmail } from "react-icons/md"
import { BsFillTelephoneFill } from "react-icons/bs"

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
                            <Navbar.Brand href="#home" className='fw-bold fs-2'>Port<span style={{ color: '#E95A59' }}>folio</span></Navbar.Brand>
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
                        <Image style={{objectFit: "cover"}} src="./Image/selfImage.jpg" height="250px" width="250px" roundedCircle />
                        
                        <h1 className='name fw-bold'>Sabiha Nasrin Jyoti</h1>
                        <p className='fs-5'>Frontend Web Developer</p>
                        <p className='fs-5'>JavaScript || Vue || React || Nuxt</p>
                    </div>
                    {/* <hr/><p>Scroll Down</p> */}
                </div>
            </header>

            {/* About me contanier */}
            <Container fluid className='about-me p-5' id="aboutMe">
                <Container>
                    <Row>
                        <Col lg={4} sm={12}>
                            <h5>Discover</h5>
                            <h2>About Me</h2>
                            <hr />
                            <p>
                                My name is Sabiha Nasrin Jyoti. I have graduated from Ahsanullah Unversity of Scinece and Technology from the deperment of CSE in Janary of 2022.
                                I want to persue my career as a web developer. I have acquired the necessary skills to build good and interactive websites. Some of my recent works will be found below.
                            </p>
                        </Col>
                        <Col lg={8} sm={12} className="pt-5">
                            <Row className="about-me-row mx-1 px-5 py-3">
                                <Col lg={3}>
                                    <Row>
                                        <h6>Web Development Skills</h6>
                                        <Col lg={6}>
                                            <ul className='ps-0'>
                                                <li>HTML</li>
                                                <li>CSS</li>
                                                <li>JavaScript</li>
                                                <li>React</li>
                                                <li>Service-Worker</li>
                                            </ul>
                                        </Col>
                                        <Col lg={6}>
                                            <ul className='ps-0'>
                                                <li>NodeJS</li>
                                                <li>Express</li>
                                                <li>Vue</li>
                                                <li>Vuex/Pinia</li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={3}>
                                    <h6>CSS Frameworks</h6>
                                    <ul className='ps-0'>
                                        <li>BootStarp</li>
                                        <li>Tailwind</li>
                                        <li>Vuetify</li>
                                    </ul>
                                </Col>
                                <Col lg={3}>
                                    <h6>Packages</h6>
                                    <ul className='ps-0'>
                                        <li>npm</li>
                                        <li>nvm</li>
                                        <li>Scoket.io</li>
                                        <li>Quill.js</li>
                                        <li>JS PDF</li>
                                        <li>Axios</li>
                                        <li>Apollo client</li>
                                    </ul>
                                </Col>
                                <Col lg={3}>
                                    <h6>Other Tools</h6>
                                    <ul className='ps-0'>
                                        <li>Github</li>
                                        <li>Docker</li>
                                        <li>Vite</li>
                                    </ul>
                                </Col>
                            </Row>
                            <a href="Sabiha Nasrin Jyoti's Resume.pdf" download="Curriculum Vitae of Sabiha Nasrin Jyoti.pdf">
                                <Button className="about-me-button mt-3 ms-0">
                                    Download My CV
                                </Button>
                            </a>
                        </Col>
                    </Row>
                </Container>
                <div className='port-number-div d-flex justify-content-end'>
                    <h1 className='port-numbers'>01</h1>
                    <hr className='port-numbers-hr' />
                </div>
            </Container>

            {/* Projects contanier */}
            <Container fluid className='projects p-5' id="projects">
                <Container>
                    <h5>What I Designed</h5>
                    <h2>Projects</h2>
                    <hr />
                    <PauseOnHover />
                </Container>
                <div className='port-number-div d-flex justify-content-end'>
                    <h1 className='port-numbers'>02</h1>
                    <hr className='port-numbers-hr' />
                </div>
            </Container>

            {/* Contact Me */}
            <Container fluid className='contact-me p-5' id="contact">
                <Container>
                    <h5>Get Me in Touch</h5>
                    <h2>Contact Me</h2>
                    <hr />
                    <Row>
                        <Col lg={6} sm={12} className="mt-4">
                            <div className='mt-3'>
                                <Row className="mb-3">
                                    <Col lg={1} className="ps-4 pt-2">
                                        <FaUserAlt className='fs-1' />
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
                                        <MdLocationOn className='fs-1' />
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
                                        <BsFillTelephoneFill className='fs-2' />
                                    </Col>
                                    <Col lg={11}>
                                        <Row>
                                            <h5 className='d-inline ms-3'>Phone</h5>
                                        </Row>
                                        <Row>
                                            <a className='mb-3 d-inline-block ms-3 text-decoration-none text-white' href='tel:+8801977030268'>+880-1977030268</a>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={1} className="ps-4 pt-2">
                                        <MdEmail className='fs-1' />
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
                                                <Form.Control type="text" placeholder="Name" required />
                                            </Col>
                                            <Col>
                                                <Form.Control type="email" placeholder="Email" required />
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                    <Form.Group className='mb-3'>
                                        <Form.Control type="text" placeholder="Subject" required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type="text" className='port-messege' required />
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
                    <hr className='port-numbers-hr' />
                </div>
            </Container>
        </>
    )
}
