import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";
import { BookDetails } from "./BookDetails";

// There is 2 steps are there
// 1) Construct the query
// 2) Binding with components  we can also get the data with props by using the old methods

function BookList() {
  //Binding the Query
  const { loading, error, data } = useQuery(getBooksQuery);

  const [selected, setSelected] = useState(null);
  console.log("selected: ", selected);

  if (loading) return <p>Loading....</p>;

  if (error) return <p>Something went wrong</p>;

  const displayBooks = data.books.map((book) => {
    return (
      <li
        key={book.id}
        onClick={() => {
          setSelected(book.id);
        }}
      >
        {" "}
        {book.name}
      </li>
    );
  });
  return (
    <div>
      <ul id="book-list">{displayBooks}</ul>
      {selected ? (
        <BookDetails bookId={selected} />
      ) : (
        <div>No book selected...</div>
      )}
    </div>
  );
}

export default BookList;
