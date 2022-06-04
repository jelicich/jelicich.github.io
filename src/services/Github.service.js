import GraphService from "@/services/Graph.service";
import gql from "graphql-tag";

export default {
  async getPinnedRepos() {
    const query = gql`
      query {
        user(login: "jelicich") {
          pinnedItems(first: 6) {
            totalCount
            edges {
              node {
                ... on Repository {
                  id
                  name
                  url
                  description
                  descriptionHTML
                }
              }
            }
          }
        }
      }
    `;
    return await GraphService.get(query);
  },
};
