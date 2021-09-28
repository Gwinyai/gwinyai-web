import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://gwinyai-api.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
