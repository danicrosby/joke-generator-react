import React, { useEffect, useState } from 'react';
import './App.scss';
import getJokes from '../helpers/data/jokeData';

function App() {
  const [singleJoke, setSingleJoke] = useState([]);
  const [punchline, setPunchline] = useState(false);

  const getAnotherJoke = () => {
    getJokes()
      .then((jokes) => {
        setSingleJoke(jokes);
      });
  };

  const handleClick = () => {
    if (punchline) {
      setPunchline(false);
      getAnotherJoke();
    } else {
      setPunchline(true);
    }
  };

  useEffect(() => {
    getAnotherJoke();
  }, []);

  return (
    <div className='App'>
      <h3>Joke Generator</h3>
      <p>{singleJoke.setup}</p>
      <p>{punchline && singleJoke.punchline}</p>
      {<button onClick={handleClick}>
        {punchline ? 'Get Another Joke' : 'Answer'}</button>}
      {singleJoke.joke}
    </div>
  );
}

export default App;
