import React,{useEffect} from 'react'
import '../Body/Slider.css'
import { ProductImg,H1,H5, ProductDetailImg } from './ProductComponents'
import "slick-carousel/slick/slick.css"
import 'slick-carousel/slick/slick-theme.css'
import {Card, Col, Row } from 'react-bootstrap';
import '../Body/Slider.css'
import { Container } from '../../globalStyles'
import Aos from 'aos'
import { clinicalChemData, immunoDiagnosticData, productDetailData } from './ProductData'

const Products = ({ proData }) => {
    useEffect(() => {
        Aos.init({duration:1000});
      }, [])
    return (
        <>
            <Container>
                <div className="industrial" data-aos="flip-up" >
                    <H1>INDUSTRIAL PRODUCTS
                     <a href="/industrialproduct" className="btn btn-lg float-right view-all" role="button">View All</a></H1>
                </div>
                <Row>
                    {proData.slice(0, 6).map((product, index) => {
                        return (
                            <Card key={index} data-aos="zoom-out">
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
                <hr/>
                <div className="industrial" data-aos="flip-up" >
                    <H1>LABORATORY AND RESEARCH
                     <a href="/labandresearch" className="btn btn-lg float-right view-all " role="button">View All</a></H1>
                </div>
                <Row>
                    {proData.slice(0, 6).map((product, index) => {
                        return (
                            <Card key={index} data-aos="zoom-out">
                                <ProductImg
                                    src={product.img}
                                    alt={product.name}
                                />
                                <Card.Body>
                                    <Card.Title style={{ textAlign: "center" }}>{product.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </Row>
                <hr/>
                <div className="industrial" data-aos="flip-up" >
                    <H1>DIAGNOSTICS PRODUCTS
                     <a href="/diagnostic" className="btn btn-lg float-right view-all " role="button">View All</a></H1>
                </div>
                <Row lg="12">
                    {proData.slice(0, 6).map((product, index) => {
                        return (
                            <Card key={index} data-aos="zoom-out">
                                <ProductImg
                                    src={product.img}
                                    alt={product.name}
                                />
                                <Card.Body>
                                    <Card.Title style={{ textAlign: "center" }}>{product.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </Row>
                <hr/>
                <div className="industrial" data-aos="flip-up" >
                    <H1>CLINICAL CHEMISTRY PRODUCT/ BIOCHEMISTRY-REAGENT AND KITS</H1>
                </div>
                <Row>
                    {clinicalChemData.map((product, index) => {
                        return (
                            <Col lg={3} sm={8} className="clinicaldata">
                            <Card key={index} data-aos="zoom-out" className="clinicalclass">
                                <Card.Body>
                                    <Card.Title>{product.chemaname}</Card.Title><hr/>
                                    {product.chemdata.map((chemcontents, index) => {
                                        return(
                                            <H5 key={index} >{chemcontents.contents}</H5>
                                        )})
                                        }
                                </Card.Body>
                            </Card>
                            </Col>
                        )
                    })}
                </Row>
                <hr/>
                <div className="industrial" data-aos="flip-up" >
                    <H1>IMMUNO DIAGNOSTIC PRODUCTS</H1>
                </div>
                <Row lg="12">
                    {immunoDiagnosticData.map((product, index) => {
                        return (
                            <Col lg={3} md={6}className="clinicaldata">
                            <Card key={index} data-aos="zoom-out" className="clinicalclass">
                                <Card.Body>
                                    <Card.Title>{product.details}</Card.Title><hr/>
                                            {product.name.map((immunocontents,index)=>{
                                            return(
                                                <H5 key={index}>{immunocontents.content}</H5>
                                            )
                                        })} 
                                </Card.Body>
                            </Card>
                            </Col>
                        )
                    })}
                </Row>
                <hr/>
                <div className="industrial" data-aos="flip-up" >
                    <H1>PRODUCT DETAILS
                     <a href="/productdetails" className="btn btn-lg float-right view-all " role="button">View All</a></H1>
                </div>
                    {productDetailData.slice(0, 2).map((productDatails, index) => {
                        return (
                            <Card key={index} data-aos="zoom-out" className="productdetailcard">
                                <ProductDetailImg
                                    src={productDatails.productDetailImg}
                                    alt={productDatails.name}
                                />
                                <Card.Body>
                                    <Card.Title  className="card_title">{productDatails.name}</Card.Title>
                                    <Card.Text className="cardtext">{productDatails.info}</Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })}
            </Container>
        </>
    )
}

export default Products
