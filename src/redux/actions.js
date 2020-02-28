import {GET_PRODUCTS,ADD_TO_CART,DELETE_FROM_CART, CLEAR_CART} from './types'


export const getProducts = () =>{
    return {
        type : GET_PRODUCTS,
    }
}

export const addToCart = (product,quantity) =>{
    return {
        type : ADD_TO_CART,
        product,
        quantity
    }
}



export const deleteFromCart = (id) =>{
    return {
        type : DELETE_FROM_CART,
        payload : id 
    }
}


 // With THUNK

export const clearCard = () => async dispatch => {
        dispatch({
            type: CLEAR_CART,
        });

}


 // Without THUNK
// export const clearCard = () =>{
//     return {
//         type : CLEAR_CART
//     }
// }