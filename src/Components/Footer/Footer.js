import React, {useEffect}from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AtulFabCareLogo from '../../Images/AFLogo.png';
import { FooterContainer, FooterLinkTitle, FooterLinkItems, FooterLink, Copyright, FLogo, Para } from './FooterElemnets'
import Aos from 'aos'

const Footer = () => {
    useEffect(() => {
        Aos.init({duration:2000});
      }, [])
    return (
        <>
            <FooterContainer>
                <Container>
                    <Row>
                        <Col lg={4} >
                            <FooterLinkItems data-aos="fade-right">
                                <FooterLinkTitle>QUICK LINK</FooterLinkTitle>
                                <FooterLink to='/'>HOME</FooterLink>
                                <FooterLink to='/'>ABOUT US</FooterLink>
                                <FooterLink to='/'>SERVICES</FooterLink>
                                <FooterLink to='/'>CONTACT US</FooterLink>
                            </FooterLinkItems>
                        </Col>
                        <Col lg={4} >
                            <FLogo src={AtulFabCareLogo} alt="Logo" />
                            <Para>Atul Fabcare Service provides washing and dry cleaning service. we pick up your dirty duds from your doorstep and deliver fresh, clean clothes back at your doorstep.</Para>
                        </Col>
                        <Col md={4}>
                            <FooterLinkItems data-aos="fade-left">
                                <FooterLinkTitle>ABOUT CRAFT</FooterLinkTitle>
                                <FooterLink to='/'>ADDRESS:<br /> Dehu Alandi Road, Devi Indrayani Society, Near CanBe Chowk Talwade, Pimpri-Chinchwad, Pune(MH) - 412114.</FooterLink>
                                <FooterLink to='/'>EMAIL:<br />theatulfabcare@gmail.com</FooterLink>
                                <FooterLink to='/'>PHONE NO.:<br /> 8177834444 / 8983606033 / 8983606044</FooterLink>
                            </FooterLinkItems>
                        </Col>
                    </Row>
                    <Row>
                        <Copyright>Copyright &copy; 2022 Atul Fabric Services. All rights reserved</Copyright>
                    </Row>
                </Container>

            </FooterContainer>
        </>
    )
}

export default Footer
