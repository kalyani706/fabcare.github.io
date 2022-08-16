import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "../../globalStyles";
import { Card, Carousel, Col, Row } from "react-bootstrap";
import { AboutusInfo,AboutusImg,P, H3, H1 } from './AboutUsElements'
import aboutus from '../../Images/aboutus.png'

const Sidebar = () => {
  return (
    <Container>
      <Row>
            <Col>
            <AboutusImg varient="top" src={aboutus} data-aos="flip-left"/>
            </Col>
            <Col>
              <br/><H1>About Us</H1>
                <AboutusInfo> Welcome to the company that has demonstrated professionalism incommercial laundry and has developed most cost effective and exible laundry solutions across industries.
            We keep learning from the past experience inlaundry, Atul Fabcare Designs and Services implements the most revolutionary and efficient solutions to meet the requirements across industries. We give a wide assortment of showcasing services and appropriate care required for your clothes. We have experts and specialists to deal with your garments in the best way.</AboutusInfo>
                
            </Col>
        </Row>
    </Container>
  );
};
export default Sidebar;