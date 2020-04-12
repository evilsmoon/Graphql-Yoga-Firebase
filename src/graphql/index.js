const { GraphQLServer } = require('graphql-yoga');
const {resolve} = require('path');
const resolvers = require('../graphql/resolvers');

const server = new GraphQLServer({
  typeDefs:resolve(__dirname,'schema.graphql'),
  resolvers,
});
server.createHttpServer({
  cors: true,
});

module.exports = server.express;
