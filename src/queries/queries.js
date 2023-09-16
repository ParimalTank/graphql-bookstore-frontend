import { gql } from "@apollo/client";

// applying the step 1 : Construct the query
const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

// applying the step 1 : Construct the query
const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const addBookMutation = gql`
 {
    mutation{
        addBook{ name : "" , genre : "" , authorId : "" }{
            name
            id
        }
    }
 }
`;

export { getAuthorsQuery, getBooksQuery, addBookMutation };
