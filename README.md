# My Management API

Personal management api developed with  GraphQl.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

### Prerequisites

What things you need to install the software and how to install them

```
Node
NPM
```

### Installing

A step by step series of examples that tell you have to get a development env running

Say what the step will be

```
npm install
npm run compile
npm run server
```

## Development Notes

### DB

Start mysql locally (installed with Homebrew)
```
mysql.server start
```

### Sequelize

Need to reference the nodemodules sequelize if local
```
./node_modules/bin sequelize
```

#### Creating table
Example
```
./node_modules/.bin/sequelize model:create --name Post --attributes title:string
```
#### Executing migrations
To make our migration file changes visible in our db
```
./node_modules/.bin/sequelize db:migrate
```

## Built With

* [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
* [GraphQL](http://graphql.org/) - Query language for APIs
* [Sequelice](http://docs.sequelizejs.com/) - ORM for Node.js v4 and up

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

* **Walter CHavarría** - *Initial work*

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details