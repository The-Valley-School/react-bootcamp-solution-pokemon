# VIDEO 16: Últimos detalles y resultado final

Por último hemos hecho algunos retoques de maquetación y responsive.

Hemos añadido media queries:

```scss
@mixin for-tablet-portrait-up {
  @media (min-width: 768px) {
    @content;
  }
}

@mixin for-tablet-landscape-up {
  @media (min-width: 1024px) {
    @content;
  }
}

@mixin for-desktop-up {
  @media (min-width: 1280px) {
    @content;
  }
}

@mixin for-big-desktop-up {
  @media (min-width: 1440px) {
    @content;
  }
}

// UTILIDADES
.mobile-only {
  @include for-tablet-portrait-up {
    display: none !important;
  }
}
```

Y creado un componente que hace scroll al navegar:

```jsx
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollTop = () => {
  // Aux functions
  const scrollTop = () => {
    const app = document?.querySelector(".app");
    if (app) {
      setTimeout(() => app.scrollIntoView({ behavior: "smooth" }), 200);
    }
  };

  // Scroll top when route change
  const { pathname } = useLocation();
  useEffect(scrollTop, [pathname]);

  return <></>;
};

export default ScrollTop;
```

Con esto, hemos terminado nuestro Bootcamp de Pokemon!

<https://the-valley-react-pokemon-bootcamp.netlify.app/>

Recuerda que en nuestro repositorio puedes encontrar todo el código visto en la sesión:

<https://github.com/The-Valley-School/react-bootcamp-solution-pokemon>
