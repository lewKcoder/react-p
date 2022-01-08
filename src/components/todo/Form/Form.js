import { useState } from 'react';
import styles from './Form.module.scss';

function Form({ inputHandler }) {
  const [data, setData] = useState();
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" className={styles.input} onChange={(e) => setData(e.target.value)} />
      <button className={styles.button} onClick={() => inputHandler(data)}>
        追加
      </button>
    </form>
  );
}

export default Form;
