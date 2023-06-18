import React, { useContext, useState } from 'react';
import { SearchBooksContext } from '../../contexts/SearchBooksContext';
import { useNavigate } from 'react-router-dom';

const Searchbar = () => {
  const { getQuery } = useContext(SearchBooksContext);
  const navigate = useNavigate();

  const [text, setText] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/?q=${text}`);
    getQuery(text);
  };

  return (
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
  );
};

export default Searchbar;
