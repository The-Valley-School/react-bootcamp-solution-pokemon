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

export const transformAreaName = (areaName) => {
  let newName = areaName.replace("-area", "");
  newName = removeDashes(newName);
  return newName;
};

export const removeDashes = (text) => {
  return text ? text.replace(/-/g, " ") : "";
};
