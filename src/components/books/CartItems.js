import React, { useContext } from 'react';
import { BookContext } from '../../contexts/BookContext';
import BookItem from './BookItem';

export default function CartItems() {
  const { cartItems, setCartItems, cartTotal } = useContext(BookContext);

  if (cartItems.length === 0) {
    return <div className="cartwrap" style={{textAlign:"center"}}><h1 style={{fontFamily:"Cormorant Infant",fontSize:"4rem"}}>Unlock the potential of your shopping journey with a cart ready to be filled. Explore our captivating collection and let your imagination run wild. Start your adventure now!</h1></div>;
  }

  return (
    <div className="cartwrap">
      {cartItems.map((book) => (
        <div className="small-book-item" key={book.id}>
          <BookItem book={book} loc="cart" />
        </div>
      ))}
    </div>
  );
}
