import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  addBookMutation,
  getAuthorsQuery,
  getBooksQuery,
} from "../queries/queries";
// There is 2 steps are there
// 1) Construct the query
// 2) Binding with components  we can also get the data with props by using the old methods

export const AddBook = () => {
  const [formData, setFormData] = useState({
    bookname: "",
    genre: "",
    authorId: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    addBook({
      variables: {
        name: formData.bookname,
        genre: formData.genre,
        authorId: formData.authorId,
      },
      refetchQueries: [{ query: getBooksQuery }], // after adding book that is not visible before refresh to solve that issues used refetch queries
    });
  };

  const { loading, error, data } = useQuery(getAuthorsQuery);

  const [
    addBook,
    { loading: addBookLoading, error: addBookError, data: addBookData },
  ] = useMutation(addBookMutation);

  const displayAuthors = () => {
    if (loading) return <option disabled>Loading...</option>;
    if (error) return <option disabled>Error Loading authors</option>;
    if (data) {
      const { authors } = data;
      return authors.map((author, index) => {
        return (
          <option key={index} value={author.id}>
            {" "}
            {author.name}{" "}
          </option>
        );
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Book Name : </label>
          <input
            type="text"
            name="bookname"
            onChange={(e) =>
              setFormData({ ...formData, bookname: e.target.value })
            }
          />
        </div>

        <div className="field">
          <label>Genre : </label>
          <input
            type="text"
            name="genre"
            onChange={(e) =>
              setFormData({ ...formData, genre: e.target.value })
            }
          />
        </div>

        <div className="field">
          <label>Author: </label>
          <select
            name="authorId"
            onChange={(e) =>
              setFormData({ ...formData, authorId: e.target.value })
            }
          >
            <option>select author</option>
            {displayAuthors()}
          </select>
        </div>

        <button type="submit">+</button>
      </form>
    </>
  );
};
