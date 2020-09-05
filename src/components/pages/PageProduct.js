import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { useState } from 'react';
import { addToCart } from '../../redux/actions'
import {Card,CardBody, CardText,CardSubtitle,CardImg, Row,Col,Input,InputGroup,InputGroupAddon,InputGroupText, Button} from 'reactstrap'

const PageProduct = (props) => {
const [product, setProduct] = useState()
const [quantity, setQuantity] = useState(1)
   


useEffect(() => {
    const findProduct = async (id) => {
        const products = props.products ;
        const prod = await products.find(item => item.id === id);
            setProduct(prod)
    }
    findProduct(props.match.params.id)
}, [props.match.params.id,props.products]);

const handleQuantity = (e) => {
    setQuantity(e.target.value)
}

const addToCart = () => {
 props.addToCart(product,quantity)   
}

    return (
        <div className='container mt-5'>
            <h1 className='mb-4'>{product && product.name} </h1>
                <Card>
                <Row>

                    <Col md='4'>
                        <CardImg  src={product && product.image} alt="Card image cap" />
                    </Col>
                    <Col md='7'>
                        <CardBody className='mt-5'>
                        <CardSubtitle>{product && product.description}</CardSubtitle>

                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                            <InputGroupText>Quantite</InputGroupText>
                            </InputGroupAddon>
                            <Input type='number' value={quantity} onChange={handleQuantity}/>
                        </InputGroup>
                        <CardText className='font-weight-bold mt-3'> TOTAL : <span>{product && product.price*quantity} DT</span></CardText>
                        <Button className='mt-2' onClick={addToCart}>Add To Card</Button>

                        </CardBody>
                    </Col>
                    </Row>
                </Card>
 
        </div>
    )
}

const mapStateToProps = state => ({
    products : state.products
});

export default connect(mapStateToProps,{addToCart})(PageProduct)
