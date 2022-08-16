import React,{useEffect} from 'react'
import { Card, Row } from 'react-bootstrap'
import { H1I, ProductImg } from './ProductComponents'
import "../Body/Slider.css"
import { Container } from '../../globalStyles'
import Aos from 'aos'

const LabAndResearch = ({labData}) => {
    useEffect(() => {
        Aos.init({duration:1000});
      }, [])
    return (
        <Container>
            <div className="industrial-products" data-aos="flip-up">
                    <H1I>LABORATORY AND REASEARCH</H1I>
            </div>
        <Row>
            {labData.map((product, index) => {
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

export default LabAndResearch

