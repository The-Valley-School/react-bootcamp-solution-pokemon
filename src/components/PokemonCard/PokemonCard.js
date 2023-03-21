import { NavLink } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./PokemonCard.scss";
import { FormattedMessage } from "react-intl";
import { getBackgroundForPokemon } from "../../utils/utils";

const PokemonCard = ({ pokemon, showOnlyImage }) => {
  const [pokemonData] = useFetch(pokemon.url);

  if (showOnlyImage) {
    return (
      <NavLink to={`/pokemon/${pokemonData?.id}`}>
        <img className="pokemon-card__image-only" src={pokemonData?.sprites?.other?.["official-artwork"]?.front_default} />
      </NavLink>
    );
  }

  return (
    <div className="pokemon-card">
      <img className="pokemon-card__image" src={pokemonData?.sprites?.other?.["official-artwork"]?.front_default} />
      <p className="pokemon-card__number">#{pokemonData?.id || ""}</p>
      <p className="pokemon-card__name">{pokemonData?.name || "- -"}</p>
      <div className="pokemon-card__data">
        <span className="pokemon-card__attr">
          <FormattedMessage id="pokemons:weight" />:
        </span>{" "}
        {pokemonData?.weight}KG
        <span className="pokemon-card__attr">
          <FormattedMessage id="pokemons:height" />:
        </span>{" "}
        {pokemonData?.height}M
      </div>

      <NavLink to={`/pokemon/${pokemonData?.id}`}>
        <button className="btn btn--small pokemon-card__more-info">+ INFO</button>
      </NavLink>
      <div className="pokemon-card__card" style={getBackgroundForPokemon(pokemonData)}></div>
    </div>
  );
};

export default PokemonCard;
