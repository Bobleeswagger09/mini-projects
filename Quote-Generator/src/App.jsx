import { useState,  useEffect } from "react";

function getRandomQuote(quotes){
  return quotes[Math.floor(Math.random() * quotes.length)]
}

const App = () => {

  const [quotes, setQutoes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch(`https://type.fit/api/quotes`)
      .then((res) => res.json())
      .then((json) => {
        setQutoes(json);
        setQuote(json[0]);
      });
  },[]);

  function getQuote() {
    setQuote(getRandomQuote(quotes))
  }

  return(
    <main>
      <h1>Project 3: Quote Generator</h1>
      <section>
        <button onClick={getQuote}>New Quote</button>
        <h3>
          <span>"</span>
          {quote?.text}
        </h3>
        <i>- {quote?.author}</i>     
      </section>
    </main>
  )
};


export default App;



// useEffect hook 
// http and the fetch api
// optional chaining operator