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
