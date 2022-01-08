import styles from './List.module.scss';
import { useCustomNumberHook } from '../../../hooks/useCustomHook';

function List({ list }) {
  const data = useCustomNumberHook(99999, 4);

  return (
    <>
      {list.url ? (
        <li className={styles.list} key={list.id}>
          <p className={styles.title}>{list.title}</p>
          <img className={styles.img} src={list.url} alt="" />
          <span>{data}</span>
        </li>
      ) : (
        <li className={styles.list} key={list.id}>
          <span>id: {list.id}</span>
          <p className={styles.title}>{list.name}</p>
        </li>
      )}
    </>
  );
}

export default List;
