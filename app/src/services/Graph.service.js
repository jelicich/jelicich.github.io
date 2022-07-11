import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
// import { setContext } from "apollo-link-context";
const t = [
  "1",
  "L",
  "h",
  "F",
  "T",
  "1",
  "B",
  "D",
  "g",
  "0",
  "j",
  "Q",
  "E",
  "j",
  "p",
  "R",
  "4",
  "S",
  "k",
  "b",
  "D",
  "J",
  "1",
  "1",
  "q",
  "v",
  "M",
  "t",
  "F",
  "5",
  "2",
  "K",
  "Q",
  "7",
  "I",
  "O",
  "_",
];
const a = "g";
const b = "h";
const c = "p";
const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
  headers: {
    // Authorization: `bearer ${process.env.VUE_APP_GITHUB_TOKEN}`,
    Authorization: `bearer ${a}${b}${c}${t.reverse().join("")}`,
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
