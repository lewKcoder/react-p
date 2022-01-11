import { useState } from 'react';
import styles from './Item.module.scss';

function Item({ number, playing, player }) {
  const [status, setStatus] = useState(null);
  const [isClick, setIsClick] = useState(false);

  const onClick = () => {
    if (player) {
      setStatus('○');
    } else {
      setStatus('×');
    }
    setIsClick(!isClick);
    playing();
  };
  return (
    <span className={`${styles.item} ${isClick && styles.event_none}`} onClick={onClick}>
      {isClick ? status : number}
    </span>
  );
}

export default Item;
