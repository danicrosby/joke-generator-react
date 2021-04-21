import React, { useEffect, useState } from 'react';
import './App.scss';
import {
  Card,
  CardText,
  CardBody,
  Button,
  CardHeader,
  CardFooter,
  Spinner
} from 'reactstrap';
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
      <div>
      <Spinner type="grow" color="primary" />
      <Spinner type="grow" color="secondary" />
      <Spinner type="grow" color="success" />
      <Spinner type="grow" color="danger" />
      <Spinner type="grow" color="warning" />
      <Spinner type="grow" color="info" />
      <Spinner type="grow" color="dark" />
    </div>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardBody>
        <CardHeader></CardHeader>
          <CardText>{singleJoke.setup}</CardText>
          <CardText>{punchline && singleJoke.punchline}</CardText>
          {<Button color="secondary" onClick={handleClick}>{punchline ? 'Get Another Joke' : 'Answer'}</Button>}
          {singleJoke.joke}
        </CardBody>
        <CardFooter className="text-muted"></CardFooter>
      </Card>
      <div>
      <Spinner type="grow" color="primary" />
      <Spinner type="grow" color="secondary" />
      <Spinner type="grow" color="success" />
      <Spinner type="grow" color="danger" />
      <Spinner type="grow" color="warning" />
      <Spinner type="grow" color="info" />
      <Spinner type="grow" color="dark" />
    </div>
    </div>
  );
}

export default App;
