import { ApolloClient, InMemoryCache } from "@apollo/client";

let uri = "https://gwinyai-dev-api.herokuapp.com/graphql";

if (process.env.ENV == "PROD") {
  uri = "https://gwinyai-api.herokuapp.com/graphql";
}

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});

export default client;
