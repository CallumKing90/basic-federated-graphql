import gql from "graphql-tag";

export const typeDefs = gql`
  extend schema
    @link(
      url: "https://specs.apollo.dev/federation/v2.0"
      import: ["@key", "@shareable"]
    )
  type Transaction @key(fields: "id") {
    id: ID!
    title: String!
    amount: Int!
  }
  type Query {
    allTransactions: [Transaction]
    transaction(id: ID!): Transaction
  }
`;
