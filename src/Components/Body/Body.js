import React, { useEffect } from 'react'
import { Hr, Span, CarDImg, AboutInfo,AboutImg,P, H3, H1,CH1, Que ,CarD, CarDBody, Ans } from './BodyEments'
import howwework from '../../Images/howwework.png'
import AboutI from '../../Images/about.jpg'
import one from '../../Images/one.png'
import two from '../../Images/two.png'
import three from '../../Images/three.png'
import four from '../../Images/four.png'
import bestcleanup from '../../Images/fabcare_pictures/best_cleanups.jpg'
import { Card, Carousel, Col, Row } from "react-bootstrap";
import './Slider.css';
import Aos from 'aos'
import "aos/dist/aos.css";
import { FaCheck } from 'react-icons/fa'
import { ImArrowRight } from 'react-icons/im'
import { Container } from '../../globalStyles'

const Body = ({ data }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])
  return (
    <>
      <Carousel>
        {data.map((slide, index) => {
          return (
            <Carousel.Item key={index}>
              <img
                className='carousel'
                src={slide.img}
                alt={slide.alt}
                data-aos="zoom-out"
              />
              <Carousel.Caption>
              <CH1>{slide.h1}</CH1>
              <a href="/aboutus"  data-aos="zoom-in" className="btn learn_more" role="button">Learn More</a>
        </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
      <br/><br/><br/><br/>
      <Container>
        <Row>
            <Col>
            <AboutImg varient="top" src={howwework} data-aos="flip-left"/>
            </Col>
            <Col>
              <br/><H1>We Are Quality Laundry Provider In Your City</H1>
              <Row>
                <Col>
                <P><FaCheck/> Quality Laundry Service</P>
                </Col>
                <Col>
                <P><FaCheck/> Express Fast Delivery</P>
                </Col>
                </Row>
                <Row>
                <Col>
                <P><FaCheck/> Highly Professional Staff</P>
                </Col>
                <Col>
                <P><FaCheck/> 100% Satisfaction Guarantee</P>
                </Col>
                </Row>
                <Row>
                <H3>Our Passion and Commitment</H3>
                <AboutInfo>We are professionals and are committed to provide quality laundry and dry cleaning services for both our individual and corporate clients.We are always on the lookout for the latest technologies, more effective cleaning methods in dealing with the stains and delicates.We are passionate about making our laundry service simple and convenient.</AboutInfo>
                </Row>
            </Col>
        </Row>
      </Container><br/>
      <Container>
          <H3>Working Process</H3><br/>
        <H1>How We Work</H1>
        <Row>
          <Col>
              <CarD data-aos="fade-right">
                <CarDImg varient="top" src={one}  />
                <CarDBody >
                Book Order
                </CarDBody>
              </CarD>
          </Col>
          <Col>
          <CarD data-aos="fade-right">
                <CarDImg varient="top" src={two}  />
                <CarDBody >
                Pickup at Doorstep
                </CarDBody>
              </CarD>
          </Col>
          <Col>
          <CarD data-aos="fade-left">
                <CarDImg varient="top" src={three}  />
                <CarDBody >
                Process
                </CarDBody>
              </CarD>
          </Col>
          <Col>
          <CarD data-aos="fade-left">
                <CarDImg varient="top" src={four}  />
                <CarDBody >
                Delivery at Doorstep
                </CarDBody>
              </CarD>
          </Col>
        </Row>
      </Container><br/><br/>
        <H1>About Us</H1>
      <Container>
        <Row>
          <Col>
            <AboutInfo>
            Welcome to the company that has demonstrated professionalism incommercial laundry and has developed most cost effective and exible laundry solutions across industries.
            We keep learning from the past experience inlaundry, Atul Fabcare Designs and Services implements the most revolutionary and efficient solutions to meet the requirements across industries. We give a wide assortment of showcasing services and appropriate care required for your clothes. We have experts and specialists to deal with your garments in the best way.
            </AboutInfo>
          </Col>
          <Col>
            <AboutImg src={AboutI} alt="About Image" data-aos="flip-left" />
          </Col>
        </Row>
      </Container>
      
        <a href="/aboutus"  data-aos="zoom-in" className="btn read_more" role="button">Read More</a><br/><br/>
        <Container>
        <H1>FAQ's</H1>
          <Row>
            <Col lg="6" >
            <CarD>
      <Card.Header as="h6" className="cardheader">How does our service work?</Card.Header>
      <Card.Body>
        <Card.Text className="text">
        <ImArrowRight/> You can place orders and rider will come at your doorstep for pickup and drop.
        </Card.Text>
      </Card.Body>
    </CarD>
            </Col>
            <Col lg="6" >
            <CarD>
      <Card.Header as="h6" className="cardheader">How many days does it take to process?</Card.Header>
      <Card.Body>
        <Card.Text className="text">
        <ImArrowRight/> It just takes 48 to 72 hours to process.
        </Card.Text>
      </Card.Body>
    </CarD>
            </Col>
          </Row>
          <Row>
            <Col lg="6" >
            <CarD>
      <Card.Header as="h6" className="cardheader">How clothes are measured?</Card.Header>
      <Card.Body>
        <Card.Text className="text"><ImArrowRight/> Clothes are measured at your doorstep using electronic weighing scale.
        </Card.Text>
      </Card.Body>
    </CarD>
            </Col>
            <Col lg="6" >
            <CarD>
      <Card.Header as="h6" className="cardheader">Do you have a free pickup and drop?</Card.Header>
      <Card.Body>
        <Card.Text className="text">
        <ImArrowRight/> Yes.
        </Card.Text>
      </Card.Body>
    </CarD>
            </Col>
          </Row>
          </Container> 

      
    </>
  )
}

export default Body

