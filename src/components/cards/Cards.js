import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import styles from './Cards.css';

const Cards = ({ characters }) => {
  const characterInformation = characters.map((character, index) => (
    <li key={`${index}${character.id}`}>
      <Card {...character} />
    </li>
  ));

  return (
    <ul className={styles.Cards}>
      {characterInformation}
    </ul>
  );
};

Cards.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};

export default Cards;
