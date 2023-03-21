# VIDEO 08: Estilos en PokemonDetail

Hemos seguido añadiendo estilos al componente PokemonDetail y hemos añadido ya algo de información en el apartado de estadísticas:

```jsx
import { FormattedMessage } from "react-intl";
import "./PokemonStats.scss";

const PokemonStats = ({ stats }) => {
  return (
    <div className="pokemon-stats">
      <h3 className="pokemon-stats__title">
        <FormattedMessage id="pokemon-detail:stats" />
      </h3>
      <div className="pokemon-stats__stats">
        {stats?.map((item) => (
          <div className="pokemon-stats__data-row" key={item.stat.name}>
            <span className="pokemon-stats__data-name">{item.stat.name}</span>
            <span className="pokemon-stats__data-value">{item.base_stat}</span>
            <span>PROGRESS</span>
          </div>
        ))}
      </div>
    </div>
  );
};
```

Recuerda que en nuestro repositorio puedes encontrar todo el código visto en la sesión:

<https://github.com/The-Valley-School/react-bootcamp-solution-pokemon>
