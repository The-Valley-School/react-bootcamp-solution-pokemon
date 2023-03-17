const PokemonMainInfo = ({ pokemonData }) => {
  return (
    <div className="pokemon-main-info">
      <div className="pokemon-main-info__name">{pokemonData?.name}</div>
    </div>
  );
};

export default PokemonMainInfo;
