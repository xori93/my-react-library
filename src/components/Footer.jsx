import React from 'react'
import Logo from "../assets/Library.svg"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="row row__column">
        <Link to="/">
          <figure className="footer__logo">
            <img src={Logo} alt="" className="fotter__logo--img" />
          </figure>
        </Link>
        <div className="footer__list">
          <Link to="/" className="footer__link">Home</Link>
          <span className="footer__link no-cursor">About</span>
          <Link to="/books" className="footer__link">Books</Link>
          <Link to="/cart" className="footer__link">Cart</Link>
        </div>
        <div className="footer__copyright">
          Copyright &copy; 2021 Library
        </div>
      </div>
    </footer>
  )
}

export default Footer