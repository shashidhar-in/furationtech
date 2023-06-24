import React, { useContext, useState } from 'react';
import { SearchBooksContext } from '../../contexts/SearchBooksContext';
import { useNavigate } from 'react-router-dom';
import { BookContext } from '../../contexts/BookContext';
import { Modal } from 'react-bootstrap';
import { AiOutlineShoppingCart as Cart } from "react-icons/ai";
import CartItems from '../books/CartItems'

const Searchbar = () => {
  const { cartItems,isModalOpen, setIsModalOpen  } = useContext(BookContext);
  const { getQuery } = useContext(SearchBooksContext);
  const navigate = useNavigate();

const handleCartClick = () => {
setIsModalOpen(true);
};

const closeModal = () => {
setIsModalOpen(false);
};

const handleCheckOut = () => {
closeModal();
navigate("/checkout");
};
  const [text, setText] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/?q=${text}`);
    getQuery(text);
  };

  return (
    <div className='search-container'>
      <form className="search" onSubmit={handleSearch}>
      <div className="input-group">
        <input
          type="search"
          className="form-control"
          placeholder="Search books"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <div className="input-group-append">
          <button className="btn" type="submit">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    </form>
       <div className='cart-sec cart-holder' id='cart-icon-large' onClick={handleCartClick}>
            <Cart size={"2.5rem"}  className="cart-icon" />
            <p className='cart-count'>{cartItems.length}</p>

          </div>
  <Modal show={isModalOpen} onHide={closeModal} fullscreen animation="down">
    <Modal.Header closeButton>
      <Modal.Title>Cart</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <CartItems />
  
    </Modal.Body>
  </Modal>
    </div>
    
  );
};

export default Searchbar;
