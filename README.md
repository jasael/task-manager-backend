<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Tecnologías y Herramientas

- node -> 20.16
- npm -> 10.8.2
- pnpm -> 9.4.0
- nestjs -> 10.0.0
- docker -> last version
- docker compose -> last version

## Pasos para descargar el repositorio e instalar las dependencias

1. Descargar el repositorio de github
2. Posicionate dentro de la carpeta del proyecto usando una terminal
3. ejecuta el siguiente script `pnpm install` para instalar las dependencias
4. con docker encendido y aún posicionado en la raíz del proyecto ejecuta el comando `docker compose up -d` que levantará el servidor de la base de datos
5. ejecuta el comando `pnpm start:dev` para ejecutar el proyecto en modo desarrollo

## Rutas

### Categories

- POST /categories
- GET /categories
- GET /categories/:id
- PATCH /categories/:id
- DELETE /categories/:id

### States

- POST /states
- GET /states
- GET /states/:id
- PATCH /states/:id
- DELETE /states/:id

### Tasks

- POST /tasks
- GET /tasks
- GET /tasks/:id
- PATCH /tasks/:id
- DELETE /tasks/:id

### Priorities

- POST /priorities
- GET /priorities
- GET /priorities/:id
- PATCH /priorities/:id
- DELETE /priorities/:id

### Users

- GET /users
- GET /users/:id
- PATCH /users/:id
- DELETE /users/:id

### Auth

- POST /auth/login
- POST /auth/signup
