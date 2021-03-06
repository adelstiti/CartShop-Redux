import React from 'react';
import  {Route,HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
import NavbarComp  from './components/layout/NavbarComp';
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import Products from './components/pages/Products';
import PageProduct from './components/pages/PageProduct';
function App() {
  return (
      <Provider store={store}>
      <HashRouter basename='/'>
        <NavbarComp />
            <Route exact path='/' component={Home} /> 
            <Route  path='/cart' component={Cart} /> 
            <Route exact path='/products' component={Products} /> 
            <Route  path='/products/:id' component={PageProduct} /> 
        </HashRouter>
      </Provider> 
  );
}

export default App;
