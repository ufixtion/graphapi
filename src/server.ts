import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { typeDefs, resolvers } from './graphql'
import { makeExecutableSchema } from 'graphql-tools';


const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const app = express();

// The GraphQL endpoint
app.use('/graphql', cors(), bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(8000, '0.0.0.0');