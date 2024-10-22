import React, { useState } from "react";
import './App.css';

const quotes = [
  {
    id: 1,
    quote: "Your heart is the size of an ocean. Go find yourself in its hidden depths.",
    author: "Rumi",
  },
  {
    id: 2,
    quote: "The Bay of Bengal is hit frequently by cyclones. The months of November and May, in particular, are dangerous in this regard.",
    author: "Abdul Kalam",
  },
  {
    id: 3,
    quote: "Thinking is the capital, Enterprise is the way, Hard Work is the solution.",
    author: "Abdul Kalam",
  },
  {
    id: 4,
    quote: "If You Can't Make It Good, At Least Make It Look Good.",
    author: "Bill Gates",
  },
  {
    id: 5,
    quote: "Heart be brave. If you cannot be brave, just go. Love's glory is not a small thing.",
    author: "Rumi",
  },
];

function App() {
  // State to keep track of current quote index
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  // Function to go to the next quote
  const handleNext = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  // Function to go to the previous quote
  const handlePrev = () => {
    setCurrentQuoteIndex((prevIndex) =>
      prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
    );
  };

  // Function to restart slideshow (go back to the first quote)
  const handleRestart = () => {
    setCurrentQuoteIndex(0);
  };

  // Get the current quote and author from the array
  const { quote, author } = quotes[currentQuoteIndex];

  return (
    <div className="app">
      <div className="buttons">
        <button onClick={handleRestart}>Restart</button>
        <button onClick={handlePrev}
        disabled={currentQuoteIndex ===0}
        className={currentQuoteIndex ===0 ? "disabled" : ""}>
        Prev
        </button>
        <button onClick={handleNext}
          disabled={currentQuoteIndex === quotes.length -1}
          className={currentQuoteIndex === quotes.length -1 ? "disabled" : ""}
          >
            Next
          </button>
      </div>
      <div className="quote-box">
        <p className="quote">"{quote}"</p>
        <p className="author">- {author}</p>
      </div>
    </div>
  );
}

export default App;
