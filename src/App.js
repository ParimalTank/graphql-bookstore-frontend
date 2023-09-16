import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

// Components
import BookList from "./components/BookList";
import { AddBook } from "./components/AddBook";

// Apollo Client Setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql", // This is declare the main end point of the application
  cache: new InMemoryCache(), // cache is an instance of InMemoryCache, which Apollo Client uses to cache query results after fetching them.
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Parimal's Reading Book</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
