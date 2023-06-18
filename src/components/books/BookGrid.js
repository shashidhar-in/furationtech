import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../contexts/BookContext';
import Spinner from '../ui/Spinner';
import BookItem from './BookItem';

const BookGrid = () => {
    const { books, isLoading } = useContext(BookContext);
    const [filter, setFilter] = useState('all');
    const [sort, setSort] = useState('none');
    const [filteredBooks, setFilteredBooks] = useState([]);

    useEffect(() => {
        let filteredData = [...books]; // Create a new array to avoid mutation

        if (filter !== 'all') {
            filteredData = filteredData.filter(book => book.title.toLowerCase().includes(filter.toLowerCase()));
        }

        if (sort === 'priceLowToHigh') {
            filteredData = filteredData.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));
        } else if (sort === 'priceHighToLow') {
            filteredData = filteredData.sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')));
        } else if (sort === 'popularity') {
            filteredData = filteredData.sort((a, b) => b.popularity - a.popularity);
        } else if (sort === 'title') {
            filteredData = filteredData.sort((a, b) => a.title.localeCompare(b.title));
        }

        setFilteredBooks(filteredData);
    }, [books, filter, sort]);

    let bookGrid = isLoading ? (
        <div>
            <Spinner />
        </div>
    ) : (
        filteredBooks.map(book => (
            <BookItem key={book.id} book={book} />
        ))
    );

    const handleFilterClick = (e) => {
        const filterValue = e.target.dataset.menu;
        setFilter(filterValue);
    };

    const handleSortChange = (e) => {
        const sortValue = e.target.value;
        setSort(sortValue);
    };

    return (
        <div className="container">
            <div className='filters-wrap'>
            <div className="btns">
                <button
                    type="button"
                    data-menu="all"
                    className={filter === 'all' ? 'active' : ''}
                    onClick={handleFilterClick}
                >
                    All
                </button>
                <button
                    type="button"
                    data-menu="javascript"
                    className={filter === 'javascript' ? 'active' : ''}
                    onClick={handleFilterClick}
                >
                    JavaScript
                </button>
                <button
                    type="button"
                    data-menu="python"
                    className={filter === 'python' ? 'active' : ''}
                    onClick={handleFilterClick}
                >
                    Python
                </button>
                <button
                    type="button"
                    data-menu="java"
                    className={filter === 'java' ? 'active' : ''}
                    onClick={handleFilterClick}
                >
                    Java
                </button>          
                <button
                    type="button"
                    data-menu="c++"
                    className={filter === 'C++' ? 'active' : ''}
                    onClick={handleFilterClick}
                >
                    C++
                </button>
                <button
                    type="button"
                    data-menu="csharp"
                    className={filter === 'csharp' ? 'active' : ''}
                    onClick={handleFilterClick}
                >
                    C#
                </button>
            </div>
            <div className="sorts">
                <select id="sort-select" value={sort} onChange={handleSortChange}>
                    <option value="none">Select Sort</option>
                    <option value="priceLowToHigh">Price (Low to High)</option>
                    <option value="priceHighToLow">Price (High to Low)</option>
                    <option value="popularity">Popularity</option>
                    <option value="title">Title</option>
                </select>
            </div>
            </div>
            <div className="allwrps">
                {bookGrid.length > 0 ? (
                    bookGrid
                ) : (
                    <p>No books available for the selected language.</p>
                )}
            </div>
        </div>
    );
}

export default BookGrid;
