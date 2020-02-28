import React,{useState} from 'react'
import {Link} from 'react-router-dom'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
  } from 'reactstrap';
import CartIcon from './CartIcon';



const NavbarComp = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">StoreRed</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className='nav-link' to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link  className='nav-link' to="/products">Products</Link>
            </NavItem>
            <NavItem>
              <Link  className='nav-link' to="/cart">Cart</Link>
            </NavItem>
          </Nav>
        </Collapse>
        <Link  to="/cart" style={{color : 'black'}}><CartIcon /></Link>
      </Navbar>
    )
}

export default NavbarComp
