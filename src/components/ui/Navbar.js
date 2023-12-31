import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../img/logo.png';
import Searchbar from './Searchbar';


const activestyle = {
fontWeight: '500',
color: '#000'
};

const Navbar = () => {



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

</nav>);
}

export default Navbar;