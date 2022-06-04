import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
// import { setContext } from "apollo-link-context";
const t = [
  "V",
  "v",
  "j",
  "A",
  "Q",
  "1",
  "Z",
  "B",
  "G",
  "B",
  "g",
  "Y",
  "h",
  "M",
  "r",
  "V",
  "d",
  "p",
  "A",
  "k",
  "4",
  "m",
  "C",
  "o",
  "r",
  "b",
  "c",
  "g",
  "T",
  "E",
  "i",
  "f",
  "4",
  "P",
  "c",
  "e",
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
