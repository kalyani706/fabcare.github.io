import React,{useEffect} from 'react'
import { Card } from 'react-bootstrap'
import { H1I, ProductDetailImg } from './ProductComponents'
import "../Body/Slider.css"
import { Container } from '../../globalStyles'
import Aos from 'aos'

const ProductDetails = ({productDetailsDta}) => {
    useEffect(() => {
        Aos.init({duration:1000});
      }, [])
    return (
        <Container>
            <div className="industrial-products" data-aos="flip-up">
                    <H1I>PRODUCT DETAILS</H1I>
            </div>
            {productDetailsDta.map((productDatails, index) => {
                        return (
                            <Card key={index} data-aos="zoom-out" className="productdetailcard">
                                <ProductDetailImg
                                    src={productDatails.productDetailImg}
                                    alt={productDatails.name}
                                />
                                <Card.Body>
                                    <Card.Title className="card_title">{productDatails.name}</Card.Title>
                                    <Card.Text className="cardtext">{productDatails.info}</Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })}
        </Container>

    )
}

export default ProductDetails
