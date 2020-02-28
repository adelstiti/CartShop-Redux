import React from 'react'
import {connect} from 'react-redux'
import {increment,decrement} from '../actions'

const Counter = ({counter,increment,decrement}) => {
    return (
        <div>
            Counter : {counter}

            <button onClick={increment} >Increment</button>
            <button onClick={decrement} >Decreament</button>
        </div>
    )
}

const mapStateToProps = state => ({
    counter : state.counter
});

// const mapDispatchToprops = dispatch => {
//     return {
//         increment : () => dispatch({type:'INCREMENT'}),
//         decrement : () => dispatch({type:'DECREMENT'})

//     }
// }



export default connect(mapStateToProps,{increment,decrement})(Counter)
