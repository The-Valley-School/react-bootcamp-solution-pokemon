# VIDEO 05: React Intl y estilos en Header

En este vídeo hemos configurado React.Intl:

<https://formatjs.io/docs/react-intl/>

Y hemos creado un provider para poder cambiar el idioma de la aplicación:

```jsx
import "./App.scss";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PokemonsPage from "./pages/PokemonsPage/PokemonsPage";
import PokemonDetailPage from "./pages/PokemonDetailPage/PokemonDetailPage";
import LocationDetailPage from "./pages/LocationDetailPage/LocationDetailPage";
import GamePage from "./pages/GamePage/GamePage";
import { IntlProvider } from "react-intl";
import { createContext, useEffect, useState } from "react";
import English from "./lang/en.json";
import Spanish from "./lang/es.json";

export const LanguageSelector = createContext();

function App() {
  const [locale, setLocale] = useState(navigator.language);
  const [messages, setMessages] = useState();

  useEffect(() => {
    switch (locale) {
      case "es-ES":
        setMessages(Spanish);
        break;
      default:
        setMessages(English);
    }
  }, [locale]);

  return (
    <div className="app">
      <LanguageSelector.Provider value={{ language: locale, setLanguage: setLocale }}>
        <IntlProvider messages={messages} locale={locale}>
          <HashRouter>
            <Routes>
              <Route path="/" element={<HomePage></HomePage>}></Route>
              <Route path="/pokemons" element={<PokemonsPage></PokemonsPage>}></Route>
              <Route path="/pokemon/:pokemonId" element={<PokemonDetailPage></PokemonDetailPage>}></Route>
              <Route path="/location/:locationName" element={<LocationDetailPage></LocationDetailPage>}></Route>
              <Route path="/game" element={<GamePage></GamePage>}></Route>
            </Routes>
          </HashRouter>
        </IntlProvider>
      </LanguageSelector.Provider>
    </div>
  );
}

export default App;
```

Y añadido la funcionalidad al Header:

```jsx
import "./Header.scss";
import { NavLink, useNavigate } from "react-router-dom";
import pokemonLogo from "../../assets/pokemon-logo.png";
import { FaArrowLeft } from "react-icons/fa";
import { LanguageSelector } from "../../App";
import { useContext } from "react";

const Header = () => {
  const navigate = useNavigate();
  const { setLanguage } = useContext(LanguageSelector);

  return (
    <header className="header">
      <button className="header__go-back" onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </button>

      <NavLink to="/" className="header__link">
        <img className="header__logo-image" src={pokemonLogo} />
      </NavLink>

      <div className="header__lang">
        <button onClick={() => setLanguage("es-ES")} className="header__lang-btn">
          ES
        </button>
        <button onClick={() => setLanguage("en-EN")} className="header__lang-btn">
          EN
        </button>
      </div>
    </header>
  );
};

export default Header;
```

Recuerda que en nuestro repositorio puedes encontrar todo el código visto en la sesión:

<https://github.com/The-Valley-School/react-bootcamp-solution-pokemon>
