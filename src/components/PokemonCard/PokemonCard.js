const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <p className="pokemon-card__name">{pokemon.name}</p>
    </div>
  );
};

export default PokemonCard;
