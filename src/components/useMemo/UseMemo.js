import { useEffect, useState, useMemo, useCallback } from 'react';
import { Button } from '@mui/material';

const name = ['tom', 'brian', 'zoi']; //ここに記述すれば初期の描画時にだけ参照され、以降同じ配列が参照されるため描画毎にコンソール出力されることはない
const User = ({ children }) => {
  const [number, setNumber] = useState(0);

  // 親コンポーネントからのpropの場合は外で書くことができないためuseMemoでキャッシュする
  // const word = children.split('');
  const word = useMemo(() => children.split(''), [children]);
  // const word = useMemo(() => {
  //   const word = children.split('');
  //   return word;
  // }, [children]);
  const fn = useCallback(() => {
    console.log('hello');
    console.log('world');
  }, []);

  // useMemo => プロパティ
  // useCallback => 関数

  // const name = ['tom', 'brian', 'zoi']; ここだと描画のたびに新しい配列として作成され、javascriptは別の配列として解釈する
  useEffect(() => {
    console.log(1234); //nameの中身は変わっていないのに描画のたびにコンソールに出力される
  }, [name, word]);

  return (
    <>
      {number}
      <Button variant="outlined" onClick={() => setNumber((prev) => prev + 2)}>
        BUTTON
      </Button>
    </>
  );
};

const UserMemo = () => {
  return <User>ドラえもんの ひみつ道具で　一番　欲しいのは　もしもボックス　です。</User>;
};

export default UserMemo;
