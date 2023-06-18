
import React, { useContext } from 'react';
import { SearchBooksContext } from '../../contexts/SearchBooksContext';
import Spinner from '../ui/Spinner';
import BookItem from './BookItem';

const SearchedBook = () => {
    const {search, isLoading} = useContext(SearchBooksContext);

    let books = isLoading ? (
        <div>
            <Spinner />
        </div>
    ) : (
        search.length ? (search.map(book => (
            <BookItem key={book.isbn13} book={book} />
        ))) : (
            <div style={{textAlign: 'center'}}>No book containing your search term</div>
        )

    )
    return ( 
        <div className="container">
            <div className="row">
                {books}
            </div>
        </div>
     );
}
 
export default SearchedBook;
