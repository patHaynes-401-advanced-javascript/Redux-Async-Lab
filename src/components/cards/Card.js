import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

const Card = ({ name, imgUrl }) => (
  // <Link to={`/cards/${id}`}>
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
