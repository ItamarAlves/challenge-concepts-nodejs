const express = require("express");
const cors = require("cors");
const { v4: uuid, validate: isUuid, validate } = require('uuid');


const app = express();

app.use(express.json());
app.use(cors());

/**
 * Middlewares
 */

function logRequests(request, response, next) {
  const { method, url } = request;

  const logLabel = `[${method.toUpperCase()} ${url}]`;

  console.time(logLabel);

  next();

  console.timeEnd(logLabel);
}

app.use(logRequests)

/*
* Rotas
*/
const repositories = [];

app.get("/", (request, response) => {
  return response.status(200).json({
    message: 'Olá Mundo, Bem Vindo Challenge Concepts Node!'
  })
});

app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;
  var likes = 0;

  const repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes
  };

  repositories.push(repository);

  return response.status(201).json(repository);
});

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const { title, url, techs } = request.body;

  const repoIndex = repositories.findIndex(repository => repository.id == id);

  if (repoIndex < 0) {
    return response.status(400).json({
      error: "Repository not found."
    });
  }

  const repository = repositories[repoIndex];
  repository.title = title;
  repository.url = url;
  repository.techs = techs;

  return response.json(repository);
});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;

  const repoIndex = repositories.findIndex(repository => repository.id == id);

  if (repoIndex < 0) {
    return response.status(400).json({
      error: "Repository not found."
    });
  }

  repositories.splice(repoIndex, 1)

  return response.status(204).send();
});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;

  const repoIndex = repositories.findIndex(repository => repository.id == id);

  if (repoIndex < 0) {
    return response.status(400).json({
      error: "Repository not found."
    });
  }

  const repository = repositories[repoIndex];

  repository.likes = repository.likes+1;

  return response.json(repository);
});

module.exports = app;
