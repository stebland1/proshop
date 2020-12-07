import React from 'react';
import { PropTypes } from 'prop-types';

const Rating = ({ rating, text, color }) => {
  return (
    <div className="rating">
      {[...Array(5)].map((el, i) => {
        return (
          <span key={i}>
            <i
              style={{ color }}
              className={
                i < rating && i + 1 > rating
                  ? 'fas fa-star-half'
                  : i < rating
                  ? 'fa fa-star'
                  : 'far fa-star'
              }
            />
          </span>
        );
      })}
      <span className="rating__text">{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: '#f8e825',
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Rating;
