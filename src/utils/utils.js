export const getPokemonlistFromEvolutions = (evolutions) => {
  if (!evolutions?.chain) {
    return [];
  }

  const pokemonList = getSpecies(evolutions.chain);

  return pokemonList;
};

const getSpecies = (chain) => {
  if (chain.evolves_to?.[0]) {
    return [chain.species, ...getSpecies(chain.evolves_to?.[0])];
  }

  return [chain.species];
};
