import { gql } from "@apollo/client";

// applying the step 1 : Construct the query
// Return All Books
const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

// applying the step 1 : Construct the query
// Return All Authors
const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

// This called as Query Variable like $name: string (! means not null)
const addBookMutation = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

// Return Book By Id
const getBookQuery = gql`
  query GetBook($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

export { getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery };
