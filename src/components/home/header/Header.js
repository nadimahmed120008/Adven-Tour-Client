import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className='header'>
      <div className='header__text-box'>
        <h1 className='heading-primary'>
          <span className='heading-primary--main'>SMART CLOCK</span>
          <span className='heading-primary--sub'> WHERE LIFE BECOME SMART </span>
        </h1>
        <Link to='/packages' className='butn btn--white btn--animated'>
          Discover our Products
        </Link>
      </div>
    </header>
  );
};

export default Header;
