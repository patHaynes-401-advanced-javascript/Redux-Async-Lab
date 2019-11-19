import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCharacter } from '../actions/cardsAction';
import CharacterDetail from '../components/cards/characterDetail';
import { getSingleCharacter, getCharactersLoading } from '../selectors/charactersSelectors';

const DisplayCharacterDetail = ({ match }) => {
  const character = useSelector(state => getSingleCharacter(state, match.params.id));
  const loading = useSelector(getCharactersLoading);
  const dispactch = useDispatch();

  useEffect(() => {
    if(!character) {
      dispactch(fetchCharacter(match.params.id));
    }
  }, []);

  if(loading) return <h1>Traveling through space...</h1>;
  if(!character) return <h1>Rick must have killed this one</h1>;

  return (
    <CharacterDetail {...character} />
  );

};

DisplayCharacterDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default DisplayCharacterDetail;
