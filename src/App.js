import './App.css';
import { Button, Card, CardContent, Typography } from '@mui/material';
import getQuotes from './getQuotes';
import { useState } from 'react';

function App() {

  const [quote, setQuote] = useState("You really can change the world if you care enough.");
  const [author, setAuthor] = useState("Marian Wright Edelman");

  const handleClick = () => {
    getQuotes().then((data) => {
      setAuthor(data.author);
      setQuote(data.content);
    })
  }


  return (
    <div className="app">
      <Typography variant='h4' className='title'>Random Quote Generator</Typography>
      <Card className='card'>
        <CardContent>
          <Typography variant='h4' className='quote'>{quote}</Typography>
          <Typography className='margin-top author' color="textSecondary">"{author}"</Typography>
          <hr />
          <Button className='margin-top' color='primary' variant='outlined' onClick={() => handleClick()}>Click for New Quotes</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
