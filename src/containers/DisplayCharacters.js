import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Cards from '../components/cards/Cards';
import { fetchCharacters } from '../actions/cardsAction';
import { getCharacters, getCharactersLoading } from '../selectors/charactersSelectors';



const DisplayCards = ({ characters, loading, fetchCharacters }) => {
  useEffect(() => {
    fetchCharacters();
  }, []);

  if(loading) return <h1>Time Traveling...</h1>;

  return (
    <Cards characters={characters} />
  );
};

DisplayCards.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired,
  loading: PropTypes.bool.isRequired,
  fetchCharacters: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  characters: getCharacters(state),
  loading: getCharactersLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetchCharacters() {
    dispatch(fetchCharacters());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayCards);
