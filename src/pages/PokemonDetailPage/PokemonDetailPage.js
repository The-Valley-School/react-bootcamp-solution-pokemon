import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./PokemonDetailPage.scss";
import PokemonMainInfo from "./PokemonMainInfo/PokemonMainInfo";
import PokemonStats from "./PokemonStats/PokemonStats";
import PokemonEvolutions from "./PokemonEvolutions/PokemonEvolutions";
import PokemonLocations from "./PokemonLocations/PokemonLocations";
import PokemonMoves from "./PokemonMoves/PokemonMoves";
import PokemonGames from "./PokemonGames/PokemonGames";
import PokeballSeparator from "../../components/PokeballSeparator/PokeballSeparator";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import usePokemonColors from "../../hooks/usePokemonColors";

const PokemonDetailPage = () => {
  const { pokemonId } = useParams();

  const POKEMON_URL = process.env.REACT_APP_API_URL + "/pokemon/" + pokemonId;
  const [pokemonData] = useFetch(POKEMON_URL);
  const [headerBackground, footerBackground] = usePokemonColors(pokemonData);

  return (
    <div className="pokemon-detail-page page">
      <Header biggerPaddingBottom={true} background={headerBackground}></Header>

      <div className="pokemon-detail-page__content page__content">
        <PokemonMainInfo pokemonData={pokemonData}></PokemonMainInfo>
        <PokeballSeparator></PokeballSeparator>
        <PokemonStats stats={pokemonData?.stats}></PokemonStats>
        <PokeballSeparator></PokeballSeparator>
        <PokemonEvolutions species={pokemonData?.species}></PokemonEvolutions>
        <PokeballSeparator></PokeballSeparator>
        <PokemonLocations pokemonData={pokemonData}></PokemonLocations>
        <PokeballSeparator></PokeballSeparator>
        <PokemonMoves pokemonMoves={pokemonData?.moves}></PokemonMoves>
        <PokeballSeparator></PokeballSeparator>
        <PokemonGames games={pokemonData?.game_indices}></PokemonGames>
      </div>

      <Footer background={footerBackground}></Footer>
    </div>
  );
};

export default PokemonDetailPage;
