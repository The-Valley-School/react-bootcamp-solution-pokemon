# VIDEO 04: Estilos para el componente PokemonCard

En este vídeo hemos añadido los estilos básicos del componente PokemonCard, de manera que ya muestra los datos del pokemon:

```jsx
<div className="pokemon-card">
  <img className="pokemon-card__image" src={pokemonData?.sprites?.other?.["official-artwork"]?.front_default} />
  <p className="pokemon-card__number">#{pokemonData?.id || ""}</p>
  <p className="pokemon-card__name">{pokemonData?.name || "- -"}</p>
  <div className="pokemon-card__data">
    <span className="pokemon-card__attr">WEIGHT:</span> {pokemonData?.weight}KG
    <span className="pokemon-card__attr">HEIGHT:</span> {pokemonData?.height}M
  </div>

  <NavLink to={`/pokemon/${pokemonData?.id}`}>
    <button className="btn pokemon-card__more-info">+ INFO</button>
  </NavLink>
</div>
```

Recuerda que en nuestro repositorio puedes encontrar todo el código visto en la sesión:

<https://github.com/The-Valley-School/react-bootcamp-solution-pokemon>
