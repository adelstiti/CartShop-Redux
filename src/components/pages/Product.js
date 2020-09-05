import React from 'react'
import {
    Card, CardImg, CardText, CardBody, CardTitle
  } from 'reactstrap';

  import  {Link} from 'react-router-dom'
const Product = ({product}) => {
    return (
          <Card >
            <CardImg  src={product.image} style={{height: '30vh'}}/>
            <CardBody>
              <CardTitle>{product.name}</CardTitle>
              <CardText className='text-muted'> Price :{product.price} DT</CardText>
              <Link className='btn btn-primary' to={`/products/${product.id}`}>Details</Link>
            </CardBody>
          </Card>
    )
}

export default Product ;
