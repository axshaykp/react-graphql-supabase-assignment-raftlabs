import { gql } from "@apollo/client";

export const GET_PROFILE = gql`
  query GetProfile($email: String = "") {
    users(where: { email: { _eq: $email } }) {
      auth_id
      avatar
      id
      name
    }
  }
`;

export const SET_AVATAR = gql`
  mutation SetAvatar($avatar: String = "", $email: String = "") {
    update_users(where: { email: { _eq: $email } }, _set: { avatar: $avatar }) {
      returning {
        avatar
      }
    }
  }
`;

export const GET_FOLLOWERS = gql`
  query GetFollowers($email: String = "") {
    users {
      followsByFollowingId(where: { following_id: { _eq: $email } }) {
        id
        follower_id
      }
    }
  }
`;

export const SET_PROFILE = gql`
  mutation SetProfile($email: String = "", $name: String = "") {
    update_users(where: { email: { _eq: $email } }, _set: { name: $name }) {
      returning {
        name
      }
    }
  }
`;

export const CREATE_POST = gql`
  mutation Post($content: String = "", $image_url: String = "") {
    insert_posts(objects: { content: $content, image_url: $image_url }) {
      returning {
        content
        image_url
      }
    }
  }
`;
