# VIDEO 12: Hook usePaginator y estilos para tipos de Pokemon

Hemos creado un hook custom que nos permita reutilizar el código de paginador:

```jsx
import { useState } from "react";

export const usePagination = (items, numItemsPerPage = 9) => {
  // Pagination
  const [numItemsToShow, setNumItemsToShow] = useState(numItemsPerPage);
  const firstItems = items?.slice(0, numItemsToShow) || [];
  const showMore = () => {
    setNumItemsToShow(numItemsToShow + numItemsPerPage);
  };
  const theAreMore = items?.length > numItemsToShow;

  return [firstItems, showMore, theAreMore];
};
```

También hemos añadido el código que cambia de color la cabecera y el footer dependiendo del tipo de pokemon que visualicemos:

```jsx
export const pokemonTypeColors = {
  bug: "#A8B821",
  electric: "#F8D030",
  fire: "#F07F2F",
  grass: "#78C84F",
  normal: "#A9A878",
  rock: "#A9A8A3",
  dark: "#6F5848",
  fairy: "#FFA3B1",
  flying: "#A890F0",
  ground: "#E0C069",
  poison: "#A040A1",
  steel: "#B8B8D0",
  dragon: "#7038F9",
  fighting: "#C03028",
  ghost: "#705798",
  ice: "#98D8D8",
  physchic: "#F85888",
  water: "#6890F0",
  default: "#495F7C",
};

export const getBackgroundForPokemon = (pokemonData) => {
  const firstPokemonType = pokemonData?.types?.[0]?.type?.name;
  const secondPokemonType = pokemonData?.types?.[1]?.type?.name;

  const firstTypeColor = pokemonTypeColors[firstPokemonType] || pokemonTypeColors.default;
  const secondTypeColor = pokemonTypeColors[secondPokemonType] || pokemonTypeColors[firstPokemonType] || pokemonTypeColors.default;

  return {
    background: `linear-gradient(to right, ${firstTypeColor}, ${secondTypeColor})`,
  };
};
```

Recuerda que en nuestro repositorio puedes encontrar todo el código visto en la sesión:

<https://github.com/The-Valley-School/react-bootcamp-solution-pokemon>
