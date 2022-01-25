import React from 'react';
import Card from '../UI/Card';
import styles from './UsersList.module.scss';
import Wrapper from '../wrapper/Wrapper';

const UsersList = ({ users }) => {
  return (
    <Wrapper>
      <Card className={styles.users}>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          ))}
        </ul>
      </Card>
    </Wrapper>
  );
};

export default UsersList;
