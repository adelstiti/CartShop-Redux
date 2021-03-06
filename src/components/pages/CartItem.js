import React from 'react'
import {
    Card, CardImg, CardText, CardBody, CardTitle, Button
  } from 'reactstrap';
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { deleteFromCart } from '../../redux/actions';

const CartItem = ({item,deleteFromCart}) => {

    return (
          <Card style={{width:'15rem'}}>
            <CardImg  src={item.product.image} style={{height:'13rem'}}/>
            <CardBody>
              <CardTitle>{item.product.name}</CardTitle>
              <CardText className='text-muted m-0'> Price : {item.product.price} DT</CardText>
              <CardText className='text-muted m-0'> Quantity :{item.quantity}</CardText>
              <CardText className='text-muted'> Total : {item.product.price * item.quantity} DT</CardText>
              <Button className='btn btn-danger' onClick={() => deleteFromCart(item.product.id)  } >  <FontAwesomeIcon icon={faTrash} size="lg" /></Button>        
            </CardBody>
          </Card>
    )
}

export default connect(null,{deleteFromCart})(CartItem)
