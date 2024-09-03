# API_Biblioteca

## Descripción del Proyecto

La **API** se centra en gestionar el proceso de préstamo de libros dentro de una biblioteca. Esta API, que actúa como el backend del sistema, permite a los usuarios registrados iniciar sesión y prestar libros. Los usuarios pueden seleccionar el libro que desean, indicando detalles como su nombre, el título del libro, la fecha de préstamo, la fecha de devolución, un número de identificación, y su correo electrónico. Este sistema facilita la gestión eficiente de préstamos y devoluciones en la biblioteca.

## Tecnologías Utilizadas

- **Lenguaje:** TypeScript
- **Tipo de API:** REST API
- **Framework:** NestJS
- **ORM:** TypeORM
- **Base de Datos:** MySQL
- **Validación de DTOs:** Class Validator, Class Transformer
- **Autenticación:** nestjs/passport, nestjs/jwt
- **Documentación:** nestjs/swagger

## Bibliotecas y Frameworks Utilizados

- **NestJS:** Un framework para construir aplicaciones Node.js escalables y eficientes, usado aquí para estructurar la API REST.
- **TypeORM:** Un ORM para TypeScript y JavaScript, utilizado para interactuar con la base de datos MySQL.
- **Class Validator:** Usado para validar objetos y datos en la API.
- **Class Transformer:** Facilita la transformación de objetos y clases.
- **Passport:** Un middleware para la autenticación en Node.js, integrado con NestJS para manejar la autenticación de usuarios.
- **JWT (Json Web Tokens):** Utilizado para la autenticación de usuarios, permitiendo mantener sesiones seguras.
- **Swagger:** Una herramienta para generar y visualizar la documentación de la API de manera automática.




## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
