import React,{useEffect} from 'react'
import { Card, Row } from 'react-bootstrap'
import { H1I, ProductImg } from './ProductComponents'
import "../Body/Slider.css"
import { Container } from '../../globalStyles'
import Aos from 'aos'

const IndustrialProducts = ({proData}) => {
    useEffect(() => {
        Aos.init({duration:1000});
      }, [])
    return (
        <Container>
            <div className="industrial-products" data-aos="flip-up">
                    <H1I>INDUSTRIAL PRODUCTS</H1I>
            </div>
        <Row>
            {proData.map((product, index) => {
                        return (
                            <Card
                                key={index} data-aos="fade-down">
                                <ProductImg
                                    src={product.img}
                                    alt={product.name}
                                />
                                <Card.Body>
                                    <Card.Title className="card-title">{product.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        )
                    })}
        </Row>
        </Container>
    )
}

export default IndustrialProducts
