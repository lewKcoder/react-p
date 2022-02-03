import { useState } from 'react';
import styles from './PRedux.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser, updateUsername } from './features/Users';

const PRedux = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [newUsername, setNewUsername] = useState('');

  return (
    <section className={styles.section}>
      <div className={styles.add_user}>
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(addUser({ id: userList[userList.length - 1].id + 1, name, username }));
          }}
        >
          Add User
        </button>
      </div>
      <div className={styles.display_users}>
        {userList.map((user) => {
          return (
            <div key={user.name}>
              <h1>{user.name}</h1>
              <h2>{user.username}</h2>
              <input
                type="text"
                placeholder="New Username..."
                onChange={(event) => {
                  setNewUsername(event.target.value);
                }}
              />
              <button
                onClick={() => {
                  dispatch(updateUsername({ id: user.id, username: newUsername }));
                }}
              >
                Update Username
              </button>
              <button
                onClick={() => {
                  dispatch(deleteUser({ id: user.id }));
                }}
              >
                Delete Username
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PRedux;
