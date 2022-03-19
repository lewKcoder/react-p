import { useState } from 'react';
import { Button, Container } from '@mui/material';

const Sample = () => {
  const [count, setCount] = useState(0);
  const additionHandler = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => {
      console.log(prevCount);
      return prevCount;
    });
  };

  return (
    <>
      {count}
      <Container>
        <Button onClick={additionHandler} variant="outlined">
          ADD
        </Button>
      </Container>
      <div className="class" id="id" onClick={clickHandler}>
        <img src="hogehoge" alt="fugafuga" />
      </div>
    </>
  );
};

export default Sample;
