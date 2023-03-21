import { FormattedMessage } from "react-intl";
import { usePagination } from "../../../hooks/usePaginator";
import "./PokemonMoves.scss";

const PokemonMoves = ({ pokemonMoves }) => {
  const [movesToShow, showMore, theAreMore] = usePagination(pokemonMoves, 6);

  return (
    <div className="pokemon-moves">
      <h3 className="pokemon-moves__title generic-title">
        <FormattedMessage id="pokemon-detail:moves" />
      </h3>

      <div className="pokemon-moves__list">
        {movesToShow?.map((item) => (
          <div key={item.move.name} className="pokemon-moves__move">
            {item.move.name}
          </div>
        ))}
      </div>

      {theAreMore && (
        <button className="btn pokemon-moves__show-more" onClick={showMore}>
          <FormattedMessage id="general:show-more" />
        </button>
      )}
    </div>
  );
};

export default PokemonMoves;
