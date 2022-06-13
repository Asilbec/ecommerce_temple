import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import piclog from  '../public/logos.jpg'
import { Cart } from './';
import { useStateContext} from '../context/StateContext';
import Image from 'next/image'

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <div className="logo">
        <Link href="/">
        <Image src={piclog} className='navbar-logo' alt="me" width="38" height="38" />
        </Link>
      </div>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping size={35} />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar