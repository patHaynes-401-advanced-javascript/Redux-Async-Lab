export const getCharacters = state => state.characters.list;
export const getCharactersLoading = state => state.characters.loading;
export const getSingleCharacter = (state, id) => state.getCharacters.list.find(character => character.id === id);
