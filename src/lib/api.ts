import { gql } from "@apollo/client";

export const GET_PROFILE = gql`
  query GetProfile {
    users {
      email
      id
      last_seen
      name
      password
    }
  }
`;

