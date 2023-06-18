
import React, { useContext } from 'react';
import { SearchBooksContext } from '../../contexts/SearchBooksContext';
import SearchedBook from '../books/SearchedBook';

const SearchPage = () => {
    const {search} = useContext(SearchBooksContext);
    return ( 
        <div className='container'>
            <h3 style={{paddingTop: "20px"}}>search results</h3>
            <p>Found <b>{search.length}</b> books</p>
            <SearchedBook />       
        </div>
     );
}
 
export default SearchPage;
