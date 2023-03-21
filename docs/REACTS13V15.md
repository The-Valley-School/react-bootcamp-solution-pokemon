# VIDEO 15: Añadiendo testing a nuestro proyecto

En este vídeo hemos añadido algunos test a nuestro proyecto, en concreto:

**Footer:**

```jsx
import { customTestingRender } from "../../utils/test-utils";
import Footer from "./Footer";

describe("Footer component", () => {
  test("Check that footer renders with correct background", () => {
    const { container } = customTestingRender(<Footer background={"grass"}></Footer>);
    const footerElement = container.querySelector(".footer");
    expect(footerElement).toHaveClass("background-grass");
  });

  test("Check that footer renders with smaller modificator", () => {
    const { container } = customTestingRender(<Footer smaller={true}></Footer>);
    const footerElement = container.querySelector(".footer");
    expect(footerElement).toHaveClass("footer--smaller");
  });
});
```

**ProgressBar:**

```jsx
import { customTestingRender } from "../../utils/test-utils";
import ProgressBar from "./ProgressBar";

describe("ProgressBar component", () => {
  test("render bar with correct width", () => {
    const { getByTestId } = customTestingRender(<ProgressBar value={50}></ProgressBar>);
    const progressBarInner = getByTestId("progress-bar__inner");
    expect(progressBarInner).toHaveStyle("width: 50%");
  });
});
```

**PokemonCard:**

```jsx
import { customTestingRender } from "../../utils/test-utils";
import PokemonCard from "./PokemonCard";
import { screen } from "@testing-library/react";

describe("PokemonCard component", () => {
  test("Render pokemon card", () => {
    const { container } = customTestingRender(<PokemonCard></PokemonCard>);
    expect(container.querySelector(".pokemon-card")).toBeInTheDocument();
  });

  test("request bulbasur and show all info", async () => {
    const mockPokemon = {
      url: "https://pokeapi.co/api/v2/pokemon/1/",
      name: "bulbasaur",
    };

    const { container } = customTestingRender(<PokemonCard pokemon={mockPokemon}></PokemonCard>);
    await screen.findByText("bulbasaur");
    await screen.findByText("#1", { exact: false });
    await screen.findByText("69KG", { exact: false });
    await screen.findByText("7M", { exact: false });
    const imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png";
    const image = container.querySelector(".pokemon-card__image");
    expect(image).toHaveAttribute("src", imageUrl);
    screen.debug();
  });
});
```

Recuerda que en nuestro repositorio puedes encontrar todo el código visto en la sesión:

<https://github.com/The-Valley-School/react-bootcamp-solution-pokemon>
