/* eslint-disable object-curly-newline */
import React, { useState, useEffect } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import './App.scss';
import getJokes from '../helpers/data/jokeData';

function App() {
  const [allJokes, setAllJokes] = useState([]);
  const [singleJoke, setSingleJoke] = useState({});
  const [showJoke, setShowJoke] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  const handleClick = () => {
    if (showJoke) {
      setShowJoke(false);
      setSingleJoke(allJokes[Math.floor(Math.random() * allJokes.length)]);
    } else {
      setShowJoke(true);
    }
  };

  useEffect(() => {
    getJokes()
      .then((jokes) => {
        setAllJokes(jokes);
        setSingleJoke(jokes[Math.floor(Math.random() * jokes.length)]);
      });
  }, []);

  return (
    <div className='App'>
      <h3>{singleJoke.joke}</h3>
      <p>{showJoke && singleJoke.correctAnswer}</p>

     <div>
        <Button id="Popover1" type="button">See Possibilities</Button>

        <Popover
          placement="bottom"
          isOpen={popoverOpen}
          target="Popover1"
          toggle={toggle}
          trigger="hover">

          <PopoverHeader>Possible Answers</PopoverHeader>

          <PopoverBody>
            <ul>
              {singleJoke.possibleAnsers?.map((pa, i) => <li key={i}>{pa}</li>)}
            </ul>
          </PopoverBody>
        </Popover>
      </div>

      <Button color="secondary" onClick={handleClick}>
        {showJoke ? 'Get Another joke' : 'Get Answer'}
      </Button>
    </div>
  );
}

export default App;
