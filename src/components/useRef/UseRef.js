import { useRef } from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import styles from './UseRef.module.scss';

function UseRef() {
  const inputRef = useRef(null);

  const onClick = () => {
    console.log(inputRef.current.value);
    inputRef.current.value = '';
    inputRef.current.focus();
  };
  return (
    <div>
      <h1>useRef</h1>
      <div className={styles.button_wrapper}>
        {/* マテリアルUIに「ref」を使用しても機能しない
        「inputRef」を使用する */}
        <TextField label="Ex) Tom" variant="outlined" inputRef={inputRef} />
        <Button variant="outlined" onClick={onClick}>
          Change Name
        </Button>
      </div>
    </div>
  );
}

export default UseRef;
