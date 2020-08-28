import React from 'react';
import logo from '../../images/Assign3-7.jfif'
import './Header.css'
const Header = () => {
  return (
    <div className="header-content">
      <img className={"header-img"} src={logo} alt="" />
      <nav>
        <a href="/">Details </a>
        <a href="/">Blog</a>
        <a href="/">Content</a>
        <input className={" header-btn"} type="search" name="" id="" placeholder="Search Course.." />
        <button className={"header-btn"}>Search</button>
      </nav>

    </div>
  );
};
export default Header;