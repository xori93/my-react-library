import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Rating from "../components/ui/Rating"

const BookInfo = ( { books } ) => {
  return (
    <div id="books__body">
      <div className="books__container">
        <div className="row">
          <div className="book__selected--top">
            <Link to="/books" className="book__link">
              <FontAwesomeIcon icon="arrow-left" />
            </Link>
            <Link to="/book" className="book__link">
              <h2 className="book__selected--title--top">Books</h2>
            </Link>
          </div>
          <div className="book__selected">
            <figure className="book__selected--figure">
              <img src="https://m.media-amazon.com/images/I/61mIq2iJUXL._AC_UF1000,1000_QL80_.jpg" alt="" className="book__selected--img" />
            </figure>
            <div className="book__selected--description">
              <h2 className="book__selected--title">Crack the code interview</h2>
              <Rating Rating="4.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookInfo