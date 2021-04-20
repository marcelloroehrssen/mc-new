import React, {useEffect, useRef, useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Card} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import MainCards from "../src/components/Cards/MainCards";
import useWindowSize from "../src/components/Hooks/UseWindowSize";

const mainCarousel = [
    {
        img: "//via.placeholder.com/800x400/373940?text=First%20slide",
        title: "First slide label",
        description: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
        img: "//via.placeholder.com/800x400/373940?text=Second%20slide",
        title: "Second slide label",
        description: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
        img: "//via.placeholder.com/800x400/373940?text=Third%20slide",
        title: "Third slide label",
        description: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
]

const rowSlider = [
    {
        id: 1,
        image: '//via.placeholder.com/800x400/373940?text=First%20slide',
        imageBg: '//via.placeholder.com/800x400/373940?text=First%20slide',
        title: '1983',
        description: 'cioao ciao ciao '
    },
    {
        id: 2,
        image: '//via.placeholder.com/800x400/373940?text=First%20slide',
        imageBg: '//via.placeholder.com/800x400/373940?text=First%20slide',
        title: '1984'
    },
    {
        id: 3,
        image: '//via.placeholder.com/800x400/373940?text=First%20slide',
        imageBg: '//via.placeholder.com/800x400/373940?text=First%20slide',
        title: '1983'
    },
    {
        id: 4,
        image: '//via.placeholder.com/800x400/373940?text=First%20slide',
        imageBg: '//via.placeholder.com/800x400/373940?text=First%20slide',
        title: '1983'
    },
    {
        id: 5,
        image: '//via.placeholder.com/800x400/373940?text=First%20slide',
        imageBg: '//via.placeholder.com/800x400/373940?text=First%20slide',
        title: '1983'
    },
    {
        id: 6,
        image: '//via.placeholder.com/800x400/373940?text=First%20slide',
        imageBg: '//via.placeholder.com/800x400/373940?text=First%20slide',
        title: '1983'
    },
    {
        id: 7,
        image: '//via.placeholder.com/800x400/373940?text=First%20slide',
        imageBg: '//via.placeholder.com/800x400/373940?text=First%20slide',
        title: '1983'
    },
]

const Home = () => {

    const ref = useRef();
    const { width } = useWindowSize(ref);

    return (<>
        <div ref={ref} style={{width:'100vw'}} />
        <Navbar fixed="top" bg="dark" variant="dark">
            <Navbar.Brand href="#">Musica Celtica</Navbar.Brand>
        </Navbar>
        <Carousel>
            {
                mainCarousel.map((slide, index) => (
                    <Carousel.Item key={index} interval={36000}>
                        <Link href={'pamela'}>
                            <a>
                                <img
                                    className="d-block w-100"
                                    style={{maxHeight: '50vh'}}
                                    src={slide.img}
                                    alt={slide.title}
                                />
                                <Carousel.Caption>
                                    <h3>{slide.title}</h3>
                                    <p>{slide.description}</p>
                                </Carousel.Caption>
                            </a>
                        </Link>
                    </Carousel.Item>
                ))
            }
        </Carousel>
        <Container fluid>
            <Row>
                <Col xs={6} md={3}>
                    <MainCards href={"ciupaaaaaa1"}>
                        <Card>
                            <Card.Img variant="top" src="//via.placeholder.com/800x400/373940?text=Award"/>
                        </Card>
                    </MainCards>
                </Col>
                <Col xs={6} md={3}>
                    <MainCards href={"ciupaaaaaa2"}>
                        <Card>
                            <Card.Img variant="top" src="//via.placeholder.com/800x400/373940?text=Award"/>
                        </Card>
                    </MainCards>
                </Col>
                <Col xs={6} md={3}>
                    <MainCards href={"ciupaaaaaa3"}>
                        <Card>
                            <Card.Img variant="top" src="//via.placeholder.com/800x400/373940?text=Award"/>
                        </Card>
                    </MainCards>
                </Col>
                <Col xs={6} md={3}>
                    <MainCards href={"ciupaaaaaa4"}>
                        <Card>
                            <Card.Img variant="top" src="//via.placeholder.com/800x400/373940?text=Award"/>
                        </Card>
                    </MainCards>
                </Col>
            </Row>
            <div style={{width: width, overflow: 'hidden'}}>
                <div style={{width: (150*rowSlider.length)+(20*(rowSlider.length-1))}}>
                    {
                        rowSlider.map((slide, index) => (
                            <div key={slide.id} style={{
                                margin: 10,
                                marginLeft: index === 0 ? 0 : 10,
                                marginRight: index === rowSlider.length - 1 ? 0 : 10,
                                width: 150,
                                height: 100,
                                float: 'left',
                                backgroundPosition: 'center center',
                                backgroundRepeat: "no-repeat",
                                backgroundSize: 'cover',
                                backgroundImage: 'url(' + slide.image + ')'
                            }}>
                            </div>))
                    }
                    <div>

                    </div>
                </div>
            </div>

        </Container>
        {/*<Navbar fixed="bottom" bg="dark" variant="dark">*/}
        {/*    <Navbar.Collapse id="responsive-navbar-nav">*/}
        {/*        <Nav className="mr-auto">*/}
        {/*            <Link href={"/test"} passHref={true}>*/}
        {/*                <Nav.Link>Profilo</Nav.Link>*/}
        {/*            </Link>*/}
        {/*            <Nav.Link href="#features">Pagine</Nav.Link>*/}
        {/*            <Nav.Link href="#features">Cazzi vari</Nav.Link>*/}
        {/*        </Nav>*/}
        {/*    </Navbar.Collapse>*/}
        {/*</Navbar>*/}

    </>)
}

export default Home
