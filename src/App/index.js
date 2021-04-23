import React, { useEffect, useState } from 'react';
import './App.scss';
import {
  Card,
  CardText,
  CardBody,
  Button,
  CardHeader,
  CardFooter,
  Container,
  Row,
  Col
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
    <Container className='App'>
      <h3 style={{ marginTop: '2em', marginBottom: '2em' }}>Joke Generator</h3>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 4 }}>
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', width: '22em' }}>
          <CardBody>
          <CardHeader></CardHeader>
            <CardText>{singleJoke.setup}</CardText>
            <CardText style={{ marginTop: '1em', marginBottom: '2em' }}>{punchline && singleJoke.punchline}</CardText>
            {<Button color="secondary" onClick={handleClick}>{punchline ? 'Get Another Joke' : 'Answer'}</Button>}
            {singleJoke.joke}
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
      </Col>
      </Row>
    </Container>

  );
}

export default App;
