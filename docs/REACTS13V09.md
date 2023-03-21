# VIDEO 09: Componente ProgressBar, ataques y juegos de PokemonDetail

En este vídeo hemos creado un componente reutilizable ProgressBar que muestra una barra con un porcentaje:

```jsx
import "./ProgressBar.scss";

const ProgressBar = ({ value }) => {
  return (
    <div className="progress-bar">
      <div className="progress-bar__inner" style={{ width: `${value}%` }}></div>
    </div>
  );
};

export default ProgressBar;
```

Estilos:

```scss
@import "../../styles/variables.scss";

.progress-bar {
  background-color: $background-progress-disabled;
  width: 100%;
  position: relative;
  border-radius: 5px;
  height: 8px;
  overflow: hidden;

  &__inner {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: $background-progress-active;
    z-index: 1;
    border-radius: 5px;
  }
}
```

Hemos añadido los juegos:

```jsx
import { FormattedMessage } from "react-intl";
import "./PokemonGames.scss";

const PokemonGames = ({ games }) => {
  return (
    <div className="pokemon-games">
      <div className="pokemon-games__title generic-title">
        <FormattedMessage id="pokemon-detail:games" />
      </div>

      <div className="pokemon-games__list">
        {games?.map((game) => (
          <span className="pokemon-games__item btn btn--small btn--light" key={game.version?.name}>
            {game.version?.name}
          </span>
        ))}
      </div>
    </div>
  );
};
```

Y también los movimientos:

```jsx
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
      <p className="pokemon-moves__title generic-title">
        <FormattedMessage id="pokemon-detail:moves" />
      </p>

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
```

Recuerda que en nuestro repositorio puedes encontrar todo el código visto en la sesión:

<https://github.com/The-Valley-School/react-bootcamp-solution-pokemon>
