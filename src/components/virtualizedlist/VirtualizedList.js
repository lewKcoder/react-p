import React from 'react';
import faker from '@faker-js/faker';
import { FixedSizeList } from 'react-window';

const bigList = [...Array(5000)].map(() => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar(),
}));

const VirtualizedList = () => {
  const renderRow = ({ index, style }) => (
    <div style={{ ...style, ...{ display: 'flex' } }}>
      <img src={bigList[index].avatar} alt={bigList[index].name} width={50} />
      <p>
        {bigList[index].name} - {bigList[index].email}
      </p>
    </div>
  );
  return (
    <FixedSizeList
      height={window.innerHeight}
      width={window.innerWidth - 20}
      itemCount={bigList.length}
      itemSize={50}
    >
      {renderRow}
    </FixedSizeList>
  );
};

export default VirtualizedList;

const List = ({ data }) => {
  return !data.length ? (
    <p>non Item</p>
  ) : (
    <ul>
      {data.map((item, i) => (
        <li key={i}>
          <div style={{ display: 'flex' }}>
            <img src={item.avatar} alt={item.name} width={50} />
            <p>
              {item.name} - {item.email}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};
