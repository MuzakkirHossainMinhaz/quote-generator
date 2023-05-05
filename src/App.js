import './App.css';
import { Button, Card, CardContent, Typography } from '@mui/material';
import getQuotes from './getQuotes';
import { useState } from 'react';

function App() {
  const [quote, setQuote] = useState("You really can change the world if you care enough.");
  const [author, setAuthor] = useState("Marian Wright Edelman");

  const handleClick = () => {
    getQuotes().then((data) => {
      setQuote(data.content);
      setAuthor(data.author);
    })
  }

  return (
    <div className="app">
      <Typography variant='h4' className='title'>Random Quote Generator</Typography>
      <Card className='card'>
        <CardContent>
          <Typography variant='h4' className='quote'>{quote}</Typography>
          <Typography className='author' color="textSecondary">"{author}"</Typography>
          <hr />
          <Button className='btn' color='primary' variant='outlined' onClick={() => handleClick()}>Generate New Quote</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
