import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../img/logo.png';
import Searchbar from './Searchbar';
import { Modal } from 'react-bootstrap';
import { AiOutlineShoppingCart as Cart } from "react-icons/ai";
import CartItems from '../books/CartItems'
import { BookContext } from '../../contexts/BookContext';

const activestyle = {
fontWeight: '500',
color: '#000'
};

const Navbar = () => {
const { cartItems } = useContext(BookContext);
const [isModalOpen, setIsModalOpen] = useState(false);
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

return (
<nav className="navbar navbar-expand-lg">
<div className="container-fluid">
<Link className="navbar-brand" to="/">
<img src={logo} alt='logo' style={{ width: '170px' }} />
</Link>
<i className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</i> <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" style={activestyle} className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" style={activestyle} className="nav-link">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/freebook" style={activestyle} className="nav-link">Free eBooks</NavLink>
        </li>
      </ul>
    </div>
  </div>

  <Searchbar />
  <div className="navbar-icons">
    <Cart style={{ fontSize: "2rem" }} onClick={handleCartClick} />
  </div>
  <Modal show={isModalOpen} onHide={closeModal} fullscreen animation="down">
    <Modal.Header closeButton>
      <Modal.Title>Cart</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <CartItems />
      {cartItems.length === 0 ? (
      <div style={{ textAlign: "center", margin: "1rem" }}>
          <button style={{ padding: "1rem",background:"#fad87a" }}  onClick={closeModal}>Back To Home</button>
        </div>
      ) : (
        <div style={{ textAlign: "center", margin: "1rem" }}>
          <button style={{ padding: "1rem" }} className='btn-success' onClick={handleCheckOut}>Checkout</button>
        </div>
      )}
    </Modal.Body>
  </Modal>
</nav>);
}

export default Navbar;