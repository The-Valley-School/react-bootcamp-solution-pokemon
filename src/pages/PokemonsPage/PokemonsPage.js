import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import "./PokemonsPage.scss";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";

const API_URL = `${process.env.REACT_APP_API_URL}/pokemon?offset=0&limit=2000`;
const NUM_ITEMS_PER_PAGE = 9;

const PokemonsPage = () => {
  const [pokemonsData] = useFetch(API_URL);
  const [numPokemonsToShow, setNumPokemonsToShow] = useState(NUM_ITEMS_PER_PAGE);
  const firstPokemons = pokemonsData?.results?.slice(0, numPokemonsToShow) || [];
  const showMorePokemons = () => setNumPokemonsToShow(numPokemonsToShow + NUM_ITEMS_PER_PAGE);

  return (
    <div className="pokemons-page page">
      <Header></Header>

      <div className="page__content pokemons-page__content">
        <div className="pokemons-page__pokemon-list">
          {firstPokemons.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon}></PokemonCard>
          ))}
        </div>

        <button onClick={showMorePokemons} className="btn page__show-more">
          + MORE
        </button>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default PokemonsPage;
