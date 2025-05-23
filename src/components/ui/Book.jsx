import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Book = ({ book }) => {
  return (
    <div className="book">
      <Link to="/books/1">
        <figure className="book__img--wrapper">
          <img src={book.url} alt="" />
        </figure>
      </Link>
      <div className="book__title">
        <Link to="/books/1" className="book__title--link">
          {book.title}</Link>
      </div>
      <Rating rating={book.rating} />
      <div className="book__price">
        {
          // check if book salePrice exist
          book.salePrice ? (
            <>
            {/* If there is a sale, then show the original price and the sale price */}
            {/* tofixed() adds 2 decimal place */}
              <span className="book__price--normal">${book.originalPrice.toFixed(2)}</span>
              {book.salePrice.toFixed(2)}
            </>
          ) : (
            <>
            {/* If there is no sale. show the original price */}
            ${book.originalPrice.toFixed(2)}
            </>
          )}

      </div>
    </div>
  )
}

export default Book