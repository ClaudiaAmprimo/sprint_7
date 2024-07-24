# sprint_7

En este ejercicio se leen los datos desde un servidor. Se desarrolló una web que muestra información sobre las naves de Star Wars. Se muestra el listado de naves con la información detallada de cada una de ellas.
API utilizada-> https://swapi.dev/

- Ejercicio 1:

Implementar es la pantalla principal donde se visualice todo el listado de naves.
Datos necesarios de cada nave:

  - Nombre de la nave.
  - Modelo.

- Ejercicio 2:

Crear la ficha de cada nave, mostrando todos sus detalles.

- Ejercicio 3:

Implementar un scroll infinito, que cargue más naves a medida que el usuario haga scroll de la web.

- Ejercicio 4

Modernización del sitio. Crear estilos de la web.

- Ejercicio 5

Implementar una página inicial de bienvenida, y mediante un botón, se podrá acceder a la página principal de naves.

- Ejercicio 6

implementar una pantalla de login y de registro, utilizando una API sencilla (JSON-SERVER-AUTH) con JWT. Un usuario/a no puede registrarse con el mismo email.
Una vez regístrate el usuario/a debe aparecer logado.

- Ejercicio 7

El listado de naves sólo puede ser visible por usuarios/as registrados, debes proteger las rutas usando Guard. En el caso de que un usuario no registrado quiera acceder a un contenido protegido por un Guard, el sistema lo lleve al “login”. Una vez realizado el login correctamente, debe redirigirse automáticamente a la página donde quería acceder inicialmente.

- Ejercicio 8

Potenciamos la ficha de cada nave mostrando las tarjetas de sus pilotos.

- Ejercicio 9

Al igual que anteriormente, se muestran las tarjetas de las películas en las que ha aparecido la nave.

- Ejercicio 10:

Implementar tests unitarios para al menos 3 componentes.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.7.

## To clone the repository:

git clone https://github.com/ClaudiaAmprimo/sprint_7.git

## To activate the backend:

npx json-server-auth db.json

## Development server:

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
