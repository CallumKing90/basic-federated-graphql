import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloGateway, IntrospectAndCompose } from "@apollo/gateway";

const gateway = new ApolloGateway({
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [
      { name: "transactions", url: "http://localhost:4001" },
      { name: "customer", url: "http://localhost:4002" },
    ],
  }),
});

const server = new ApolloServer({
  gateway,
});

await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: 4000`);
