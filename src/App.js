import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
const colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];
function App() {
  const [quotes, setQuotes] = useState([]);
  const [index, setIndex] = useState(0);
  const [quote, setquote] = useState(null);
  const [color, setColor] = useState("#16a085");

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then(res => res.json())
      .then(data => {
        setQuotes(data.quotes);
        setColor(colors[Math.floor(Math.random() * colors.length)]);
      })
      .catch(err => console.log(err));
  }, []);
  let singleQuote = null;
  if (quotes.length > 0) {
    singleQuote = quotes[Math.floor(Math.random() * quotes.length)];

    document.body.style = `background: ${color};`;
  }
  const getRandomQuote = () => {
    setquote(quotes[Math.floor(Math.random() * quotes.length)]);
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  };
  return (
    <div id="quote-box">
      <div id="text">
        <i class="fa fa-quote-left"> </i>
        <h1>{singleQuote && singleQuote.quote}</h1>
      </div>
      <div id="author">{singleQuote && singleQuote.author}</div>
      <div class="footer">
        <div class="social">
          <a
            href="twitter.com/intent/tweet"
            style={{ backgroundColor: color }}
            class="social"
            id="tweet-quote"
            title="Tweet this quote!"
            target="_blank"
          >
            <i class="fa fa-twitter"></i>
          </a>
          <a
            class="social"
            style={{ backgroundColor: color }}
            id="tumblr-quote"
            title="Post this quote on tumblr!"
            target="_blank"
          >
            <i class="fa fa-tumblr"></i>
          </a>
        </div>
        <button
          style={{ backgroundColor: color }}
          onClick={getRandomQuote}
          id="new-quote"
        >
          New quote
        </button>
      </div>
    </div>
  );
}

export default App;
