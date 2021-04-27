## Sobre o desafio

Esse projeto é um **[desafio](https://github.com/rocketseat-education/bootcamp-gostack-desafios/tree/master/desafio-conceitos-nodejs)** do bootcamp da Rocketseat para treinar conceitos do Node.js!

## Desenvolver
Aplicação para armazenar repositórios do seu portfólio, que irá permitir a criação, listagem, atualização e remoção dos repositórios, e além disso permitir que os repositórios possam receber "likes".

### Executando
#### Clone o repositório.
```shell
$ git clone https://github.com/ItamarAlves/challenge-concepts-nodejs.git
```

#### Com seu repositório baixado na sua máquina, execute o comando na pasta do projeto clonado para instalar todas as dependências.
```shell
$ yarn
```

#### Para rodar execute
```shell
$ yarn dev
```

### Rotas 
#### Listas todos os repositórios
```shell
$ curl --request GET \
  --url http://127.0.0.1:0000/repositories
```

#### Criar um novo repositório
```shell
$ curl --request POST \
  --url http://127.0.0.1:0000/repositories \
  --header 'Content-Type: application/json' \
  --data '{
	"title" : "Desafio Node.js",
	"url" : "http://github.com/ItamarAlves",
	"techs": [
		"Node.js",
		"React.js",
		"React Native.js"
	]
}'
```

#### Atualiza um repositório
```shell
$ curl --request PUT \
  --url http://127.0.0.1:0000/repositories/id \
  --header 'Content-Type: application/json' \
  --data '{
	"title" : "Desafio Node.js",
	"url" : "http://github.com/ItamarAlves",
	"techs": [
		"Node.js",
		"React.js",
		"React Native.js"
	]
}'
```

#### Deleta um repositório
```shell
$ curl --request DELETE \
  --url http://127.0.0.1:0000/repositories/id
```

#### Criar um novo Like para o Repositório
```shell
$ curl --request POST \
  --url http://127.0.0.1:0000/repositories/id/like
```
