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
