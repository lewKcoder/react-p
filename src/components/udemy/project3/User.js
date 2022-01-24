import React, { useState } from 'react';
import AddUser from './Users/AddUser';
import UsersList from './Users/UsersList';
import styles from './User.module.scss';

const User = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prev) => [...prev, { name: uName, age: uAge, id: Math.random().toString() }]);
  };

  return (
    <section className={styles.section}>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </section>
  );
};

export default User;
