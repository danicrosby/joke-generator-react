/* eslint-disable object-curly-newline */
import React, { useEffect, useState } from 'react';
import './App.scss';
import { Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';
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
       <Card>
        <CardBody>
          <CardTitle tag="h3">Joke Generator</CardTitle>
          <CardText>{singleJoke.setup}</CardText>
          <CardText>{punchline && singleJoke.punchline}</CardText>
          {<Button onClick={handleClick}>{punchline ? 'Get Another Joke' : 'Answer'}</Button>}
          {singleJoke.joke}
        </CardBody>
      </Card>
    </div>
  );
}

export default App;
