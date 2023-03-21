# VIDEO 06: Home y Footer

En este vídeo hemos añadido contenido a la Home:

```jsx
import "./HomePage.scss";
import Footer from "../../components/Footer/Footer";
import pokemonLogoAlternative from "../../assets/pokemon-logo-alternative.png";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const HomePage = () => {
  return (
    <div className="home-page page">
      <div className="page__content home-page__content">
        <img className="home-page__logo" src={pokemonLogoAlternative} />

        <div className="home-page__links-container">
          <NavLink to={"/pokemons"}>
            <button className="btn home-page__button">
              <FormattedMessage id="home:pokedex" />
            </button>
          </NavLink>

          <NavLink to={"/game"}>
            <button className="btn home-page__button">
              <FormattedMessage id="home:game" />
            </button>
          </NavLink>
        </div>
      </div>

      <Footer smaller={true}></Footer>
    </div>
  );
};

export default HomePage;
```

Y a nuestro Footer:

```jsx
import { FormattedMessage } from "react-intl";
import "./Footer.scss";

const Footer = ({ smaller }) => {
  return (
    <footer className={`footer ${smaller ? "footer--smaller" : ""} `}>
      <p className="footer__text">
        <FormattedMessage id="footer:text" />
      </p>
    </footer>
  );
};

export default Footer;
```

Recuerda que en nuestro repositorio puedes encontrar todo el código visto en la sesión:

<https://github.com/The-Valley-School/react-bootcamp-solution-pokemon>
