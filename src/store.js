import {createStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './redux/reducer'


const middleware = [thunk];

 function loadState(){
  const state = localStorage.getItem('cart');
  if(state !== null){
    return JSON.parse(state)
  }
  return {
      products : [
          {"id" : 1,"name":"Boots" ,"price" : 70 ,"image" :"https://images.unsplash.com/photo-1579828898622-446b9d65ff73?" , "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus labore consectetur fugit excepturi tempora nihil similique eligend"},
          {"id" : 2,"name":"Camera" ,"price" : 274 ,"image" :"https://images.unsplash.com/photo-1506770797561-3b22048d1a13" , "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus labore consectetur fugit excepturi tempora nihil similique eligend"},
          {"id" : 3,"name":"Tel" ,"price" : 170 ,"image" :"https://images.unsplash.com/photo-1520809171575-a3c6f94eda84" , "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus labore consectetur fugit excepturi tempora nihil similique eligend"},
          {"id" : 4,"name":"Gazouz" ,"price" : 4 ,"image" :" https://images.unsplash.com/photo-1502389743708-d00f658638bd?" , "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus labore consectetur fugit excepturi tempora nihil similique eligend"},
      ],
      cart : []
  }
}


function saveState(state) {
  localStorage.setItem('cart',JSON.stringify(state))
}

const store = createStore(reducers,loadState(),
  composeWithDevTools(
    applyMiddleware(...middleware),
  )
);

store.subscribe(() => saveState(store.getState()))

export default store ;


  