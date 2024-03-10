import { useQuery } from "@apollo/client";
import React from "react";
import { getBookQuery } from "../queries/queries";
import { Puff } from "react-loader-spinner";

export const BookDetails = ({ bookId }) => {
  const { loading, data } = useQuery(getBookQuery, {
    variables: { id: bookId },
  });

  let display;
  if (loading) {
    display = (
      <div>
        <Puff
          visible={true}
          height="50"
          width="50"
          color="#FFFFFF"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <span style={{ paddingTop: "25px" }}>Loading.....</span>
      </div>
    );
  } else {
    const { book } = data;
    display = book ? (
      <div>
        <h1 style={{ color: "white" }}>Books Information</h1>
        <h2>Name :- {book.name}</h2>
        <p>Genre :-{book.genre}</p>
        <p>Author :- {book.author.name}</p>
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
