# VIDEO 11: Pokemon locations y página de detalle de localización

Ha sido el turno ahora de realizar la página de detalle de una localización:

```jsx
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PokeballSeparator from "../../components/PokeballSeparator/PokeballSeparator";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import useFetch from "../../hooks/useFetch";
import "./LocationDetailPage.scss";

const NUM_ITEMS_PER_PAGE = 9;

const LocationDetailPage = () => {
  const { locationName } = useParams();
  const LOCATION_URL = `${process.env.REACT_APP_API_URL}/location-area/${locationName}`;
  const [locationData] = useFetch(LOCATION_URL);

  // Pagination
  const [numPokemonToShow, setNumPokemonsToShow] = useState(NUM_ITEMS_PER_PAGE);
  const firstPokemons = locationData?.pokemon_encounters?.slice(0, numPokemonToShow) || [];
  const showMore = () => {
    setNumPokemonsToShow(numPokemonToShow + NUM_ITEMS_PER_PAGE);
  };

  return (
    <div className="location-detail-page page">
      <Header></Header>
      <div className="location-detail-page__content page__content">
        <h1 className="location-detail-page__title">{locationData?.names?.[0]?.name}</h1>

        <PokeballSeparator />

        <div className="location-detail-page__pokemon-list">
          {firstPokemons.map((pokemon) => (
            <PokemonCard showOnlyImage={true} key={pokemon.name} pokemon={pokemon.pokemon} />
          ))}
        </div>

        {locationData?.pokemon_encounters?.length > numPokemonToShow && (
          <button className="btn location-detail-page__show-more" onClick={showMore}>
            <FormattedMessage id="general:show-more" />
          </button>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default LocationDetailPage;
```

Para llegar a ellas, hemos pintado la lista de lugares donde aparece un Pokemon:

```jsx
import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { transformAreaName } from "../../../utils/utils";
import "./PokemonLocations.scss";

const PokemonLocations = ({ pokemonData }) => {
  const [locations] = useFetch(pokemonData?.location_area_encounters);

  return (
    <div className="pokemon-locations">
      <h3 className="pokemon-locations__title generic-title">
        <FormattedMessage id="pokemon-detail:locations" />
      </h3>
      <div className="pokemon-locations__list">
        {locations?.map((location) => (
          <div className="pokemon-locations_item" key={location?.location_area?.name}>
            <span className="pokemon-locations__area-name">{transformAreaName(location?.location_area?.name)}</span>
            <NavLink to={"/location/" + location?.location_area?.name}>
              <button className="btn btn--small pokemon-locations__show-more">
                <FormattedMessage id="general:more-info" />
              </button>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};
```

Recuerda que en nuestro repositorio puedes encontrar todo el código visto en la sesión:

<https://github.com/The-Valley-School/react-bootcamp-solution-pokemon>
