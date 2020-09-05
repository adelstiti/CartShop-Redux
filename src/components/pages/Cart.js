import React, { useState } from 'react'
import {Col, Alert} from 'reactstrap'
import { connect } from 'react-redux'
import CartItem from './CartItem'
import { clearCard } from '../../redux/actions'

const Cart = ({cart,total,clearCard}) => {
    const [visible, setVisible] = useState(false);
    const [alert, setAlert] = useState(false);
    
    const onDismiss = () => setVisible(false);
    
    const placeOrder = () => {
        if(!total){
           return setAlert(true)
        }
        clearCard()
        setVisible(true)
    }
    return (
    <div className='container mt-5'>
    <Alert color="primary" isOpen={visible} toggle={onDismiss} >
        We Recieved your order , and we are working on it . 
    </Alert>
    <Alert color="danger" isOpen={alert} toggle={onDismiss}>
        Cart is empty
    </Alert>
        <h1 className='mb-4'>Cart</h1>
        <div className="row">
                {cart.map((item,idx) => {
                return(
                <Col key={idx} md='4'> 
                    <CartItem item={item} />
                </Col>
                )
                })}
        </div>
        <p className='mt-3 font-weight-bold'>Total : {total} DT</p>
        <button className='btn btn-primary btn-block mb-4' onClick={placeOrder}> Place Order</button>

   
      
    </div>
    )
}
const mapStateToProps = state => ({
    cart : state.cart,
    total : state.cart.reduce((total,item) => total + item.quantity*item.product.price,0)

});


export default connect(mapStateToProps,{clearCard})(Cart)
