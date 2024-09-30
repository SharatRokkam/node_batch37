import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/quotes")
      .then((response) => {
        setQuotes(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <h1>Quotes Generator</h1>
      <p>Quotes : {quotes.length}</p>

      {quotes.map((quote, index) => (
        <div key={index}>
          <h2>{quote.author}</h2>
          <p>{quote.description}</p>
        </div>
      ))}
    </>
  );
};

export default App;
