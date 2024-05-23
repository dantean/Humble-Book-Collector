import { gql } from '@apollo/client';

export const CREATE_USER = gql`mutation Mutation($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
        savedBooks {
            _id
            authors
            bookId
            image
            link
            title
          }
      }
    }
  }`;

  export const LOGIN = gql`mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
        savedBooks {
          _id
          authors
          bookId
          image
          link
          title
        }
      }
    }
  }`;

  // AFTER you created the saveBook and DeleteBook schema, write the gql template literal for both here