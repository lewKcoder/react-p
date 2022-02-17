import axios from 'axios';
import { useState, useEffect } from 'react';

function Jscode() {
  const [coin, setCoin] = useState([]);
  const [name, setName] = useState([]);

  useEffect(() => {
    axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json`).then((res) => {
      setCoin(res.data);
      for (const i in coin.bpi) {
        setName((prev) => [...prev, coin.bpi[i]]);
      }
    });
  }, []);

  const originalObj = {
    a: 'hogehoge',
    b: 'fugafuga',
    c: 'piyopiyo',
  };
  const operationObj = (obj) => {
    obj.a = 'hogehoge2';
  };
  const operationObjCopy = (obj) => {
    const copyObj = Object.assign({}, obj);
    copyObj.a = 'hogehoge3';
  };
  const operationObjSplit = (obj) => {
    const copyObjSplit = { ...obj };
    copyObjSplit.a = 'hogehoge4';
  };
  const originalArray = [1, 2, 3, 4, 5, 6];
  const operationArray = (array) => {
    originalArray.push(7);
  };
  const operationArrayCopy = (array) => {
    const copyArray = array.concat();
    copyArray.push(9999);
  };

  operationObj(originalObj);
  operationObjCopy(originalObj);
  operationObjSplit(originalObj);
  // console.log(originalObj);
  // console.log(copyObj)

  operationArray(originalArray);
  operationArrayCopy(originalArray);
  // console.log(originalArray);

  const number = [1, 3, 5, 432, 4, 5, 2, 4, 45, 6, 6, 34, 1, 4, 4, 4, 7, 88, 88];
  const max = number.reduce((max, current) => {
    // console.log(`max: ${max}`)
    // console.log(`current: ${current}`)
    // return max + current
    if (max > current) {
      return max;
    } else {
      return current;
    }
  });
  // console.log(max);

  const height10 = number.filter((a) => {
    if (a > 10) return a;
  });
  // console.log(height10);

  const set = new Set(number);
  // console.log('set', set);

  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((data) => data);

  async function myGitAccountInfo() {
    try {
      const response = await fetch('https://api.github.com/users/lewKcoder');
      const userData = await response.json();
      // sessionStorage.setItem('user', JSON.stringify(userData));
    } catch (error) {
      console.log(error);
    }
  }
  myGitAccountInfo();
  // fetch('https://api.github.com/users/lewKcoder')
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));

  return (
    <>
      <div>
        <h4>use axios BitCoin rate</h4>
        {/* <h5>{coin.time.updated}</h5>
        <div>
          <h5>{coin.chartName}</h5>
          <p>{coin.disclaimer}</p>
          {name.map((i, index) => (
            <div key={`${i.code}${index}`}>
              <h6>
                {i.code}: <span>{i.rate}</span>
              </h6>
              <p>{i.description}</p>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
}

export default Jscode;
