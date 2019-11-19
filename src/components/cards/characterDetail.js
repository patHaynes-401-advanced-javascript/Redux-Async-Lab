import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetail = ({ id, name, status, species, gender, imageUrl }) => (
  <section>
    <h2>{name}</h2>
    <img src={imageUrl} />
    <p>{status}</p>
    <p>{species}</p>
    <p>{gender}</p>
    <p>{id}</p>
  </section>
);

CharacterDetail.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
  species: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default CharacterDetail;
