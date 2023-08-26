import { useState, useEffect } from 'react';
import './index.css';

    function getRandomQuotes(quotes){
        return quotes[Math.floor(Math.random() * quotes.length)]
    }

const App = () => {

    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState(null);

    useEffect(() =>{
        fetch("https://type.fit/api/quotes")
            .then(res =>{
                if (!res.ok){
                    throw new ERROR('Network response was not ok'); 
                }
                return res.json();
            })
            .then((data) =>{
                console.log(data);
                setQuotes(data);
                setQuote(data[0]);
                console.log(setQuote)

            })
            .catch((error) =>{
                console.error("Error fetching jokes:", error); 
            });
    }, [])


    function getNewQuote(){
        setQuote(getRandomQuotes(quotes))
    }

    return(
        <main>
            <h1>Project 3: Programming jokes</h1>
            <section>
                <button onClick={getNewQuote}>New Quote</button>
                <h3>
                    <span>"</span>
                    {quote?.text}
                </h3>
                <i>- {quote?.author}</i>
            </section>
        </main>
    )





}

export default App;


// we make api call 

// api returns a response object  # the res is not the data it's is just the res object

// res.json is the data 
// when we return that data it returns another promise for us

// after the promise then we can now get the data