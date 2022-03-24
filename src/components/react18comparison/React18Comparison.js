import React, { useState, useLayoutEffect } from 'react';
import { Button, Typography } from '@mui/material';

function React18Comparison() {
  const [pref, setPref] = useState(Math.random);
  const [count, setCount] = useState(1);
  const [date, setDate] = useState(new Date().toLocaleString());

  function clickHander() {
    console.log('----click----');
    fetchSomething().then((res) => {
      setPref(Math.random);
      setCount((c) => c + 1);
      setDate((d) => new Date().toLocaleString());
    });
  }

  return (
    <div>
      <Button variant="outlined" onClick={clickHander}>
        BUTTON
      </Button>
      <Typography>{count}</Typography>
      <Typography>{pref}</Typography>
      {date}
      <LogCheck />
    </div>
  );
}

function fetchSomething() {
  return new Promise((resolve) => setTimeout(resolve, 100));
}

function LogCheck() {
  useLayoutEffect(() => {
    console.log('Painting');
  });
  console.log('Render');
  return null;
}

export default React18Comparison;
