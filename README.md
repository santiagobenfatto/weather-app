# Weather App

## Descripcion

Aplicación del clima en tiempo real. Proporciona datos actuales en función de la ubicación del usuario. Más especificamente muestra en pantalla:

- Fecha y hora actual
- Temperatura del momento
- Máx y mín temp. en día de la fecha
- Humedad y presion
- Velocidad y dirección del viento
- Salida y puesta del sol

## Inicialización

![ViteJs](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/42px-Vitejs-logo.svg.png?20220412224743)

La app fue creada utilizando [ViteJs](https://es.vitejs.dev/guide/), una herramienta de compilación más rápida que la ya muy conocida create-react-app. 

## Tecnologías utilizadas

![HTML](https://camo.githubusercontent.com/b9fe9f8e52c6fd30d814c24f3eb71cb09d7f5bc82d7f67a384055de93fdbb0bf/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f68746d6c2d352d2d76312e706e67)  ![CSS](https://camo.githubusercontent.com/dc75aee770dff630309493116eeebd6a39c7042e4e94780a5e6c8f107bebe76f/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f637373332e706e67)  ![SASS](https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/288_Sass_logo-42.png) ![Javascript](https://camo.githubusercontent.com/84c2586aa67309f6fa224fdf5fdf33a633239375397a8e753ac1e7cc727f5458/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f6a6176617363726970742d2d76312e706e67)  ![ReacjtJs](https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-42.png)  ![NPM](https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/npm-42.png)  ![ViteJs](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/42px-Vitejs-logo.svg.png?20220412224743)

El proyecto fue inicializado principalmente con **[NPM](https://www.npmjs.com/)** y **[ViteJs](https://es.vitejs.dev/guide/).**
Para la estructura y la maquetación del sitio junto con sos estilos se utilizó  **[HTML](https://developer.mozilla.org/es/docs/Web/HTML)**, **[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)** y su pre-procesador **[SASS](https://sass-lang.com/)**. Para la interactividad y funcionamiento modular fue necesario **[Javascript](https://developer.mozilla.org/es/docs/Web/JavaScript)** y su librería **[ReactJs](https://react.dev/).**. 



## Funcionamiento

Comienza solicitando coordenadas actuales a la *API de Posicionamiento y Geolocación* del navegador.
Dentro de un *contexto*, las coordenadas son usadas para realizar una Fetch Request a la **API de [OpenWeather](https://openweathermap.org/)** retornando un objeto con la información, que será guardado en un *estado.*
Para esto se utilizan los  **[hooks](https://react.dev/reference/react) [useState()](https://react.dev/reference/react/useState), [useEffect()](https://react.dev/reference/react/useEffect) y [useContext()](https://react.dev/reference/react/useContext),** proporcionados por la librería **[ReactJs](https://react.dev/).**

Para la fecha y el reloj, se utilizó el objeto **[Date()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)** que facilita javascript, con sus respectivos métodos **[getDate()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate), [getDay()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay), [getMonth()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth), [getFullYear()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear), [getHours()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours) y [getMinutes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes).**

Durante el día, atardecer y noche, dependiendo del horario la imagen de fondo será diferente:

- De 7am a 17pm: '/img/soleadonubes.jpg'
- De 17pm a 19pm: '/img/atardecer.jpg'
- De 19pm a 7am: '/img/nightsky2.jpg'


## Librerías y dependencias

```
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "sass": "^1.58.1"
  },
  "devDependencies": {
    "@types/react": "^18.0.27",
    "@types/react-dom": "^18.0.10",
    "@vitejs/plugin-react": "^3.1.0",
    "dotenv": "^16.0.3",
    "vite": "^4.1.0",
    "vite-plugin-env": "^1.0.1"
```


## Visualización del proyecto

Para acceder al proyecto se puede realizar a través del siguiente link, el cual fue alojado en el servicio Vercel:

Ir a la página: [Weather App](https://weather-app-sage-seven-41.vercel.app/)