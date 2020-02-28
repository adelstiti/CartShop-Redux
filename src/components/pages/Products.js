import React from 'react'
import Product from './Product'
import {Col} from 'reactstrap'
import { useState } from 'react'
import { connect } from 'react-redux'

const Products = ({products}) => {
    
    return (
    <div className='container mt-5'>
        <h1 className='mb-4'>Products</h1>
        <div className="row">
                {products.map((product,idx) => {
                return(
                <Col key={idx} md='4'> 
                    <Product product={product} />
                </Col>
                )
                })}
        </div>
    </div>
    )
}
const mapStateToProps = state => ({
    products : state.products
});

export default connect(mapStateToProps)(Products)
