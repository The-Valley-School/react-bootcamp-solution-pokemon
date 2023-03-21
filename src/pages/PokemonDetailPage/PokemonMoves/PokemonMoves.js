import { useState } from "react";
import { FormattedMessage } from "react-intl";
import "./PokemonMoves.scss";

const NUM_ITEMS_PER_PAGE = 6;

const PokemonMoves = ({ pokemonMoves }) => {
  const [numMovesToShow, setNumMovesToShow] = useState(NUM_ITEMS_PER_PAGE);
  const showMore = () => setNumMovesToShow(numMovesToShow + NUM_ITEMS_PER_PAGE);
  const movesToShow = pokemonMoves ? pokemonMoves.slice(0, numMovesToShow) : [];

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

      {pokemonMoves && pokemonMoves.length > numMovesToShow && (
        <button className="btn pokemon-moves__show-more" onClick={showMore}>
          <FormattedMessage id="general:show-more" />
        </button>
      )}
    </div>
  );
};

export default PokemonMoves;
