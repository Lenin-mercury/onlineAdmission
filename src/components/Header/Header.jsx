import React from 'react';
import './header.scss';


const Header = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">College Logo</a>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link" href="/">HOME</a>
      <a className="nav-item nav-link" href="about">ABOUT</a>
      <a className="nav-item nav-link" href="admission">ADMISSION</a>
      <a className="nav-item nav-link" href="contact">CONTACT</a>
  
    </div>
  </div>
</nav>
    );
};

export default Header;