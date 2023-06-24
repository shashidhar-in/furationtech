import React, { useContext } from 'react';
import { BookContext } from '../../contexts/BookContext';
import { Button, Image } from 'react-bootstrap';
import emptyCart from '../../img/empty_cart.jpg';
import { useNavigate } from 'react-router-dom';
import { AiOutlineCloseCircle as Delete } from 'react-icons/ai';
import {AiFillLock as Lock} from 'react-icons/ai'
import '../../scss/cart.css';

export default function CartItems() {
  const { cartItems, setCartItems, setIsModalOpen  } = useContext(BookContext);
  const navigate = useNavigate();

  const shopNow = () => {
    setIsModalOpen(false);
    navigate('/');
  };
  const handleCheckOut =()=>{
setIsModalOpen(false);
    navigate('/checkout');
  }

  const removeItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const CartDisp = () => {
    if (cartItems.length === 0) {
      return (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Image className="emptyCart" src={emptyCart} />
          <h1>Oops! Your cart is empty.</h1>
          <div id="shop-now" className="text-center" onClick={shopNow}>
            <h5 className="Product">Shop Now</h5>
          </div>
        </div>
      );
    } else {
      return (
        <div className="cartContainer">
          <div className="itemsContainer">
            {cartItems.map((item, i) => (
              <div className="ProductContainer" key={i}>
                <Delete className="removeItem" onClick={() => removeItem(i)} />
                <Image className="cartImage" src={item.image} />
                <p className="price">{item.price}</p>
              </div>
            ))}
           
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <CartDisp />
      {cartItems.length!==0? <div className='btn-container'>
            <button className="buy-btn" onClick={handleCheckOut}>Checkout&nbsp;<Lock/></button>
          </div>:""}
    </div>
  );
}
