import { useLayoutEffect, useEffect, useRef } from 'react';
import styles from './UseLayoutEffect.module.scss';

// https://zenn.dev/syu/articles/6b96e34535b33e
// useLayoutEffectは実行してから画面に表示
// useEffectは画面に表示してから実行

// UseLayoutEffectは処理後に画面表示するため初期表示が遅くなる
// 基本的にuseEffectを使うようにする
// useEffectを使っていて実行前の表示がチラついたり不具合がある時にuseLayoutEffectを使う

function UseLayoutEffect() {
  const inputRef = useRef(null);

  // 実行してから表示
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  // 表示してから実行
  useEffect(() => {
    inputRef.current.value = 'HELLO';
    console.log(inputRef.current.value);
  }, []);
  return (
    <div>
      <h1>useLayoutEffect</h1>
      <input ref={inputRef} value="PEDRO" id="" className={styles.input} />
    </div>
  );
}

export default UseLayoutEffect;
