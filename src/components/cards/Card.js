import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ id, name, image }) => (
  <Link to={`/cards/${id}`}>
    <figure>
      <img src={image} />
      <figcaption>{name}</figcaption>
    </figure>
  </Link>
);

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Card;
