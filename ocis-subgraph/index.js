import { buildSubgraphSchema } from "@apollo/subgraph";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";

const customers = [
  {
    id: "1",
    name: "Callum King",
    address: "123 Swamp Troll Road",
    postcode: "ne12 345",
  },
  {
    id: "2",
    name: "John Goat",
    address: "12 Village Road",
    postcode: "v123 aba",
  },
];

const resolvers = {
  Query: {
    customer: (_, { id }) => {
      console.log(`resolving product by id '${id}'`);
      return customers.find((customer) => customer.id === id);
    },
  },
};

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
});

await startStandaloneServer(server, {
  listen: { port: 4002 },
});
