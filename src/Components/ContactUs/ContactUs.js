import React from "react";
import { Col, Row } from "react-bootstrap";
import { Container } from "../../globalStyles";
import {Hr,Span} from "../Body/BodyEments"

const Contact = () => {
    return (
        <Container>
        <Hr>
        <Span>Contact Us</Span>
        </Hr>
            <Row>
                <Col>
                    <div className="container_form">
                        <div className="Contact-in">
                            <h4>Get In Touch With Us</h4>
                        </div>
                        <div className="contact-form">
                            <form>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="contact-form-txt"
                                />
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="contact-form-txt"
                                />
                                <textarea
                                    placeholder="Message"
                                    className="contact-form-textarea"
                                ></textarea>
                                <input type="submit" name="Submit" className="contact-form-btn" />
                            </form>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="contact_info ">
                        <div className="Info_box">
                            <h3>Contact Info</h3>
                            <h4>Phone</h4>
                            <h5>8177834444 / 8983606033 / 8983606044</h5>
                            <h4>Email</h4>
                            <h5>theatulfabcare@gmail.com</h5>
                            <h4>Address</h4>
                            <h5> Dehu Alandi Road, Devi Indrayani Society, Near CanBe Chowk Talwade, Pimpri-Chinchwad, Pune(MH) - 412114.</h5>
                        </div>
                    </div>
                </Col>
            </Row>
            <hr/>
            <div className="contact-map">
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.044196466423!2d73.78346211538113!3d18.706839368332076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b7028b154cf7%3A0x5b8579f04a330658!2sDevi%20Indrayani%20Housing%20Talawade!5e0!3m2!1sen!2sin!4v1660501662169!5m2!1sen!2sin"
                        width="100%"
                        height="auto"
                        allowfullscreen=""
                        loading="lazy"
                        title="Atul Fabcare Services"
                    ></iframe>
                </div>
            </div>
        </Container>
    );
};

export default Contact;