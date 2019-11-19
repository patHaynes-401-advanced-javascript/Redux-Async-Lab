export const getSingleCharacter = () => {
  const randomCharacter = Math.floor(Math.random() * 10) + 1;
  return fetch(`https://rickandmortyapi.com/api/character/${randomCharacter}`)
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

export const getCharacters = (page = 1) => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
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
      imgUrl: character.image
    })
    ));
};
