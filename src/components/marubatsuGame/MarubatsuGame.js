import { useState } from 'react';
import styles from './MarubatsuGame.module.scss';
import Item from './item/Item';
import Button from '@mui/material/Button';

function MarubatsuGame() {
  const [player, setPlayer] = useState(true);

  const playing = () => {
    setPlayer(!player);
  };

  const restart = () => {
    window.location.reload();
  };
  return (
    <>
      <h1>○×ゲーム</h1>
      <p>Player: {player ? 'user1' : 'user2'}</p>
      <div className={styles.board}>
        <div className={styles.row}>
          <Item number={1} playing={playing} player={player} />
          <Item number={2} playing={playing} player={player} />
          <Item number={3} playing={playing} player={player} />
        </div>
        <div className={styles.row}>
          <Item number={4} playing={playing} player={player} />
          <Item number={5} playing={playing} player={player} />
          <Item number={6} playing={playing} player={player} />
        </div>
        <div className={styles.row}>
          <Item number={7} playing={playing} player={player} />
          <Item number={8} playing={playing} player={player} />
          <Item number={9} playing={playing} player={player} />
        </div>
      </div>
      <div>
        <Button variant="outlined" onClick={restart}>
          restart
        </Button>
      </div>
    </>
  );
}

export default MarubatsuGame;
