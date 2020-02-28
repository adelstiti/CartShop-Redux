import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import {connect} from 'react-redux'

const CartIcon = ({totQuantity}) => {
    return (
        <div>
            <FontAwesomeIcon icon={faShoppingBag} size="lg" />
            <span className='badge badge-danger'>{totQuantity}</span>

        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        totQuantity : state.cart.reduce((total,item) => total + parseInt(item.quantity),0)
    }
}
export default  connect(mapStateToProps)(CartIcon)
