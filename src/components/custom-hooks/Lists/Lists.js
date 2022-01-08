import styles from './Lists.module.scss';
import List from '../List/List';
import { useCustomJsonHook, useCustomNumberHook } from '../../../hooks/useCustomHook';

const Lists = () => {
  const data = useCustomNumberHook(Math.random(), 2);
  const photsList = useCustomJsonHook('photos');
  const userList = useCustomJsonHook('users');
  return (
    <div>
      <h1>Custom hooks</h1>
      <span>{data}</span>
      <div>
        <h2>Photo Items</h2>
        <ul className={styles.lists}>
          {photsList.map((list) => (
            <List list={list} />
          ))}
        </ul>
      </div>
      <div>
        <h2>User Lists</h2>
        <ul className={styles.lists}>
          {userList.map((list) => (
            <List list={list} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Lists;
