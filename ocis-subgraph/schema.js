import gql from "graphql-tag";

export const typeDefs = gql`
  extend schema
    @link(
      url: "https://specs.apollo.dev/federation/v2.0"
      import: ["@key", "@shareable"]
    )
  type Customer @key(fields: "id") {
    id: ID!
    name: String!
    address: String
    postcode: String
  }

  type Query {
    customer(id: ID!): Customer
  }
`;
