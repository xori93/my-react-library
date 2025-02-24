import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Book = () => {
  return (
    <div className="book">
      <a href="">
        <figure className="book__img--wrapper">
          <img src="https://m.media-amazon.com/images/I/81ANaVZk5LL._AC_UF1000,1000_QL80_.jpg" alt="" />
        </figure>
      </a>
      <div className="book__title">
        <a href="/" className="book__title--link">
          Atomic Habits</a>
      </div>
      <div className="book__ratings">
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star-half-alt" />
      </div>
      <div className="book__price">
        <span className="book__price--normal">$15.00</span>
        $10.00
      </div>
    </div>
  )
}

export default Book