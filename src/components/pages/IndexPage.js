import React from 'react';
import BookGrid from '../books/BookGrid';

const IndexPage = () => {
    
    return ( 
        <React.Fragment>
            <div className="container-fluid" id="welcome-div">
                <h2>Fuel Your Curiosity with the Hottest IT Reads</h2>
                <h3>Explore a Universe of Limitless Possibilities!</h3>
            </div>
            <div className="container">
                <h3 style={{paddingTop: "20px"}}>New Releases Books</h3>
                <BookGrid />
            </div>
        </React.Fragment>
        
     );
}
 
export default IndexPage;