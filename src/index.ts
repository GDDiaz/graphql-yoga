import { GraphQLServer } from './lib';

const sampleItems = [
    {name: 'Apple'},
    {name: 'Banana'},
    {name: 'Orange'},
    {name: 'Melon'},
];

const typeDefs = `
  type Query {
    items: [Item!]!
  }
  type Item {
    name: String!
  }
`;

const resolvers = {
    Query: {
        items: () => sampleItems,
    },
};

const options = { port: 5000 };
const server = new GraphQLServer({ typeDefs, resolvers });
server.start(options, () => console.log('Server is running on localhost:' + options.port));