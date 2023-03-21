# VIDEO 03: Primera llamada al API y estilos globales

En este vídeo hemos hecho nuestra primera llamada a una API haciendo uso del hook custom useFetch.

```jsx
import { useEffect, useState } from "react";

const useFetch = (apiUrl) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (apiUrl) {
      fetch(apiUrl)
        .then((data) => data.json())
        .then((dataParsed) => setResult(dataParsed));
    }
  }, [apiUrl]);

  return [result];
};

export default useFetch;
```

También hemos creado algunos ficheros SCSS para añadir estilos globales en nuestro index.scss:

```scss
@import "./styles/buttons.scss";
@import "./styles/globals.scss";
@import "./styles/media-queries.scss";
@import "./styles/page.scss";
```

Recuerda que en nuestro repositorio puedes encontrar todo el código visto en la sesión:

<https://github.com/The-Valley-School/react-bootcamp-solution-pokemon>
