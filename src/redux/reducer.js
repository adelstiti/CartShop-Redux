import {GET_PRODUCTS,ADD_TO_CART,DELETE_FROM_CART,CLEAR_CART} from './types'

const reducers = (state,action) => {
    switch(action.type){
        case GET_PRODUCTS : return{
            ...state,
            products: state  
        }
        case ADD_TO_CART : return{
            ...state,
            cart : [...state.cart,{
                product : action.product,
                quantity : action.quantity
            }]
        }
        case DELETE_FROM_CART : return {
            ...state,
            cart: state.cart.filter(item => item.product.id !== action.payload),
        }
        case CLEAR_CART : return {
            ...state,
            cart: []
        }
        default : return state ;
    }
}

export default reducers;