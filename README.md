# Mono case study - cartoon movie REST api

## Table of content

- [Description](#description)
- [Technologies](#technologies)
- [Installation](#installation)
- [Contact](#contact)

## Description

This is an movie REST API built using the node and mongodb stack. It impliments the following API endpoints:
- **GET /movies/** - Returns a list of movies in the database in JSON format
- **GET /movies/{{id}}/** - Returns a detail view of the specified movie id in JSON format
- **POST /movies/** - Creates a new movies with the specified details
- **PATCH /movies/{{id}}** - Updates an existing movie
- **DELETE /movies/{{id}}** - Deletes an existing movie

## Technologies

The project is built using.
#### Express, MongoDB, Mongoose, NodeJS

- API
  `CRUD`,
- Testing
  `jest`, `supertest`


Config file is not ignored from the repo, so the installation is quite straight forward.

1. Clone the project to your local directory

```
git clone 
```

2. The project uses NPM for managing dependencies. Run npm install to install all the required dependencies. Do the same in the client directory

```
npm install
```

3. Create a config.env file in the root of the product and add the required env variables like so:

````
PORT=8000
NODE_ENV=development
````

4. Run the following runner

```
npm run dev
```

## Contact

You can contact me at:

- [Email](shivamkaushikofficial@gmail.com)
- [Linkedin](https://www.linkedin.com/in/kshivamdev/)
- [Twitter](https://twitter.com/kShivamDev)
- [Medium](https://medium.com/@shivamkaushikofficial)
- [Angellist](https://angel.co/kshivamdev)
