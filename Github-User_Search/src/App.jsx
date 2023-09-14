import { useState } from 'react';
import Form from './Form'
import User from './User'

const API_URL = "https://api.github.com";

async function fetchedData(query){
  try{
    const response = await fetch(`${API_URL}/search/users?q=${query}`);
    const json = await response.json();
    console.log(json);
    return json.items || [];

  }catch (e){
    throw new Error(e);
  }
}

const App = () =>{
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function getUserInput(event){
    setQuery(event.target.value)
  }

  async function onSubmit(event){
    event.preventDefault();
    const results = await fetchedData(query);
    setResults(results);
  }

  return(
    <>
      <div className="app">
        <main className='main'>
          <h1>Project 5: Github User Search </h1>
          <Form 
            onChange={getUserInput}
            onSubmit={onSubmit}
            value={query}
          />
          <h3>Results:</h3>
          <div id="results">
            {results.map((user) => (
              <User 
                  key={user.login}
                  avatar={user.avatar_url}
                  url={user.html_url}
                  username={user.login}
                  
              />
            ))}
          </div>
        </main>
      </div>
    </>
  )
}

export default App;