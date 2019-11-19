import React from 'react';
import PropTypes from 'prop-types';
import styles from './Detail.css';

const CharacterDetail = ({ name, status, species, gender, imgUrl }) => (
  <div className={styles.Detail}>
    <section >
      <h2>{name}</h2>
      <img src={imgUrl} />
      <p>{status}</p>
      <p>{species}</p>
      <p>{gender}</p>
    </section>

  </div>
);

CharacterDetail.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired
};

export default CharacterDetail;
