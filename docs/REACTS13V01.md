# VIDEO 01: Presentación del proyecto y estructura inicial

En este vídeo te explicamos el Bootcamp que vamos a realizar.

Será un proyecto sobre Pokemon que contenga una Pokedex y un juego en el que tendrás que adivinar la silueta del Pokemon.

Este sería el FIGMA de nuestro proyecto:

<https://www.figma.com/file/hJjuVDsGfpxk3wziYPAigE/WD-BC1-SW%2BR%26M?node-id=0%3A1&t=mg2oDlnx6BXWCt1E-1>

Y este sería el enlace de la documentación de la API:

<https://pokeapi.co/docs/v2>

En este vídeo hemos realizado la configuración inicial de nuestro proyecto haciendo uso de Create React App y además hemos configurado:

**ESLint**

```jsx
module.exports = {
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard"],
  overrides: [
    {
      files: ["**/*.test.js", "**/*.spec.js"],
      env: {
        jest: true,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "semi": "off",
    "react/react-in-jsx-scope": "off",
    "space-before-function-paren": "off",
    "react/jsx-indent": [2, 2],
    "react/prop-types": "off",
    "jsx-quotes": [2, "prefer-double"],
    "quotes": [2, "double"],
    "quote-props": [2, "consistent"],
    "multiline-ternary": "off",
    "react/no-unescaped-entities": "off",
    "comma-dangle": "off",
  },
};
```

**Prettier**

```jsx
{
  "singleQuote": false,
  "tabWidth": 2,
  "jsxSingleQuote": false,
  "arrowParens": "always",
  "proseWrap": "never",
  "singleAttributePerLine": false,
  "quoteProps": "consistent",
  "semi": true,
  "printWidth": 600
}
```

Y husky:

<https://typicode.github.io/husky/>

Recuerda que en nuestro repositorio puedes encontrar todo el código visto en la sesión:

<https://github.com/The-Valley-School/react-bootcamp-solution-pokemon>
