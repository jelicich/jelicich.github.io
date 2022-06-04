import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
// import { setContext } from "apollo-link-context";

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `bearer ${process.env.VUE_APP_GITHUB_TOKEN}`,
  },
});

// const authLink = setContext((_, { headers }) => {
//   return {
//     ...headers,
//     Authorization: `bearer ${process.env.VUE_APP_GITHUB_TOKEN}`,
//   };
// });

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  // link: authLink.concat(httpLink),
  link: httpLink,
  cache,
});

export default {
  async get(query) {
    try {
      const response = await apolloClient.query({ query: query });
      return response.data;
    } catch (error) {
      console.error("graphql service error: ", error);
    }
  },
};
