# VIDEO 10: Evoluciones de un Pokemon

En este vídeo hemos añadido las evoluciones de los Pokemon, para ello hemos tenido que hacer dos peticiones:

```jsx
import { FormattedMessage } from "react-intl";
import useFetch from "../../../hooks/useFetch";
import { getPokemonlistFromEvolutions } from "../../../utils/utils";
import PokemonEvolutionItem from "./PokemonEvolutionItem/PokemonEvolutionItem";

const PokemonEvolutions = ({ species }) => {
  const [specieData] = useFetch(species?.url);
  const [evolutions] = useFetch(specieData?.evolution_chain?.url);
  const evolutionList = getPokemonlistFromEvolutions(evolutions);

  return (
    <div className="pokemon-evolutins">
      <h3 className="pokemon-evolutins__title">
        <FormattedMessage id="pokemon-detail:evolutions" />
      </h3>
      <div className="pokemon-evolutions__list">
        {evolutionList.map((pokemon) => (
          <PokemonEvolutionItem currentPokemon={species?.name} key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonEvolutions;
```

También hemos tenido que crear un componente PokemonEvolutionItem:

```jsx
import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
import "./PokemonEvolutionItem.scss";

const PokemonEvolutionItem = ({ pokemon, currentPokemon }) => {
  const url = pokemon?.name ? `${process.env.REACT_APP_API_URL}/pokemon/${pokemon.name}` : null;
  const [pokemonData] = useFetch(url);

  return (
    <div className="pokemon-evolution-item">
      <img className="pokemon-evolution-item__image" src={pokemonData?.sprites?.other?.["official-artwork"]?.front_default} />
      <p className="pokemon-evolution-item__name">{pokemonData?.name}</p>
      {currentPokemon !== pokemonData?.name && (
        <NavLink to={"/pokemon/" + pokemonData?.id}>
          <button className="pokemon-evolution-item__show-more btn btn--small">
            <FormattedMessage id="general:more-info" />
          </button>
        </NavLink>
      )}
    </div>
  );
};

export default PokemonEvolutionItem;
```

Y algunas funciones auxiliares para recorrer la respuesta de la API:

```jsx
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
```

Recuerda que en nuestro repositorio puedes encontrar todo el código visto en la sesión:

<https://github.com/The-Valley-School/react-bootcamp-solution-pokemon>
