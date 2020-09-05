import React from 'react';
import  {Route,Switch,BrowserRouter} from 'react-router-dom'
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
        <BrowserRouter>
        <NavbarComp />
          <Switch>
            <Route exact path='/' component={Home} /> 
            <Route  path='/cart' component={Cart} /> 
            <Route exact path='/products' component={Products} /> 
            <Route  path='/products/:id' component={PageProduct} /> 
          </Switch>
        </BrowserRouter>
      </Provider> 
  );
}

export default App;
