import styles from './DoneList.module.scss';
import { useEffect, useState } from 'react';

function DoneList({ list, index, doneListDelete }) {
  const [isDisplay, setIsDisplay] = useState(true);

  const deleteHandler = (i) => {
    setIsDisplay(!isDisplay);
    doneListDelete(i);
  };

  return (
    <>
      {isDisplay && (
        <li key={Math.random()} className={styles.li}>
          <p>{list}</p>
          <button className={styles.button} onClick={() => deleteHandler(index)}>
            削除
          </button>
        </li>
      )}
    </>
  );
}

export default DoneList;
