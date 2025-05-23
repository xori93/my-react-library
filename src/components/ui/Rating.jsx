import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

 const Rating = ({ rating }) => {
  return (
    <div className="book__ratings">
        {
          // create a new array
          // use the .fill() method to fill the array 
          // map through the array
          new Array(Math.floor(rating)).fill(0).map((_, index) => 
          <FontAwesomeIcon icon="star" key={index} />) 
        }
        {
          !Number.isInteger(rating) && (
          <FontAwesomeIcon icon="star-half-alt" />
        )}
    </div>
  )
}

export  default Rating
