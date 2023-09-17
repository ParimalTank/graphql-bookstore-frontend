import { useQuery } from "@apollo/client";
import React from "react";
import { getBookQuery } from "../queries/queries";

export const BookDetails = ({ bookId }) => {
  const { loading, data } = useQuery(getBookQuery, {
    variables: { id: bookId },
  });

  let display;
  if (loading) {
    display = <div>loading</div>;
  } else {
    const { book } = data;
    display = book ? (
      <div>
        <h2>{book.name}</h2>
        <p>{book.genre}</p>
        <p>{book.author.name}</p>
        <p>All books by this author:</p>
        <ul className="other-books">
          {book.author.books.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </div>
    ) : (
      <div>No book selected...</div>
    );
  }

  return <div id="book-details">{display}</div>;
};
