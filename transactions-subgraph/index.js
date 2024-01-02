import { buildSubgraphSchema } from "@apollo/subgraph";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";

const transactions = [
  {
    id: "1",
    title: "Tesco",
    amount: 30,
  },
  {
    id: "2",
    title: "Sainsbury's",
    amount: 40,
  },
  {
    id: "3",
    title: "WHSmith",
    amount: 90,
  },
];

const resolvers = {
  Query: {
    transaction: (_, { id }) => {
      console.log(`resolving transaction by id '${id}'`);
      return transactions.find((transaction) => transaction.id === id);
    },
    allTransactions: (_, thisTransaction) => {
      console.log(thisTransaction);
      return transactions;
    },
  },
};

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
});

await startStandaloneServer(server, {
  listen: { port: 4001 },
});
