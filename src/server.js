const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const db = require('./db/models');
import schema from './graphql';

let port = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', graphqlHTTP({
  schema: schema,
  context: {
    db
  },
  graphiql: true
}));

app.listen(port);
console.log('GraphQL API server running at localhost:' + port);
