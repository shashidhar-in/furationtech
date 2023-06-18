import React from 'react';
import { Link } from 'react-router-dom';
import FreeBook from '../books/FreeBook';

const FreeBookPage = () => {

    return ( 
        <>
            <div className="container-fluid" id="welcome-div">
                <h2>Discover IT, Programming, and Computer Science  </h2>
                <h3>wisdom through free books that broaden your horizons.</h3>
            </div>
            <div className="container">
                <h5 style={{paddingTop: "20px"}}> <Link className="link" to="/"> Home </Link> / Free eBooks </h5>
                <FreeBook />
            </div>
        </>
     );
}
 
export default FreeBookPage;