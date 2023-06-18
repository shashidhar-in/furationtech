import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ZeroRating from '../ui/ZeroRating';
import { BookContext } from '../../contexts/BookContext';
import { Button } from 'react-bootstrap';
import { Toaster, toast } from 'react-hot-toast';

const BookItem = ({ book, loc }) => {
  const { cartItems, setCartItems,  setCartTotal } = useContext(BookContext);

  const addToCart = (e) => {
    e.preventDefault();
    setCartItems((prevCartItems) => [...prevCartItems, book]);
    setCartTotal((prevCartTotal) => prevCartTotal + parseFloat(book.price.replace('$', '')));
    toast.success("Book added to cart");

  };

  const removeFromCart = (e) => {
    e.preventDefault();
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.isbn13 !== book.isbn13));
    setCartTotal((prevCartTotal) => prevCartTotal - parseFloat(book.price.replace('$', '')));
    toast.success("Book deleted from cart");
  };

  return (
    <div className="col-lg-3 col-sm-6">
        <div><Toaster/></div>
      <Link to={`/books/${book.isbn13}`} className="grids">
        <div className="card">
          <img className="card-img-top" src={book.image} alt="Card img cap" />
          <div className="card-body">
            <p className="card-title" title={book.title}>
              {book.title}
            </p>
            <div className="rate-price">
              <ZeroRating />

              {book.price === '$0.00' ? (
                <p style={{ color: '#b2395b', fontWeight: 'bold' }}>Free eBook</p>
              ) : (
                <div>
                  <p className="card-text">{book.price}</p>
                </div>
              )}
            </div>
            {loc === 'cart' ? (
              <div className="remove-from-cart-btn" onClick={removeFromCart}>
                Remove
              </div>
            ) : (
              <div className="add-to-cart-btn" onClick={addToCart}>
                Add To Cart
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookItem;
