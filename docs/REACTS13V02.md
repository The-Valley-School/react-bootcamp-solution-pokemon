# VIDEO 02: Configuración del Router y SCSS

En este vídeo hemos configurado el Router de nuestro proyecto, hemos añadido soporte para SCSS y hemos creado nuestras páginas:

- Home
- Game
- PokemonDetail
- Pokemons
- LocationDetail

```jsx
<div className="app">
  <HashRouter>
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/pokemons" element={<PokemonsPage></PokemonsPage>}></Route>
      <Route path="/pokemon/:pokemonId" element={<PokemonDetailPage></PokemonDetailPage>}></Route>
      <Route path="/location/:locationName" element={<LocationDetailPage></LocationDetailPage>}></Route>
      <Route path="/game" element={<GamePage></GamePage>}></Route>
    </Routes>
  </HashRouter>
</div>
```

Además hemos creado nuestro primer componente Header para poder probar la navegación.

Recuerda que en nuestro repositorio puedes encontrar todo el código visto en la sesión:

<https://github.com/The-Valley-School/react-bootcamp-solution-pokemon>
