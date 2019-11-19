export const getSingleCharacter = (character) => {
  return fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch characters';
      return json;
    });
};

export const searchCharacters = (search, page) => {
  return fetch(`https://rickandmortyapi.com/api/character/?name=${search}&page=${page}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch character';
      return json;
    });
};

export const getCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character/')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch characters';

      return json;
    })
    .then(({ results }) => results.map(character => ({
      id: character.id,
      name: character.name,
      species: character.species,
      status: character.status,
      image: character.image
    })
    ));
};
