import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ name, imgUrl }) => (

  <figure>
    <img src={imgUrl} />
    <figcaption>{name}</figcaption>
  </figure>

);

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired
};

export default Card;
