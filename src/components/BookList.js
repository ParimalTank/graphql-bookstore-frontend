import React from "react";
import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";

// There is 2 steps are there
// 1) Construct the query
// 2) Binding with components  we can also get the data with props by using the old methods

function BookList() {
  //Binding the Query
  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return <p>Loading....</p>;

  if (error) return <p>Something went wrong</p>;

  return data.books.map((book) => {
    return <li key={book.id}> {book.name}</li>;
  });
}

export default BookList;