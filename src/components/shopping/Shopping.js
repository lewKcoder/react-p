import { useState, useEffect, useReducer } from 'react';
import styles from './Shopping.module.scss';
import Cart from './Cart';
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';

const draItems = [
  {
    src: '/doraemon-item-1.webp',
    alt: 'どこでもドア',
    name: 'どこでもドア',
    price: 38000000000,
    description: 'いつでもどこでも好きな場所に行けます。',
  },
  {
    src: '/doraemon-item-2.webp',
    alt: 'もしもボックス',
    name: 'もしもボックス',
    price: 88000000000,
    description:
      '「もしこんなことがあったら・・・」人はだれでも一度はこういう妄想をすることでしょう。『もしもボックス』を使えば、そんなもしもを実現することができるのです。',
  },
  {
    src: '/doraemon-item-3.webp',
    alt: '三倍時間ペタンコ',
    name: '三倍時間ペタンコ',
    price: 1000000000,
    description:
      '人よりも3倍早く時間が流れるようになる『三倍時間ペタンコ』。作業効率が3倍になるので、誰よりもすばやく動くことができます。',
  },
  {
    src: '/doraemon-item-4.webp',
    alt: '人生やりなおし機',
    name: '人生やりなおし機',
    price: 100000000000,
    description:
      '今の能力のままで過去に戻ってやり直すことができたら・・・そんな夢を叶えてくれるのが『人生やりなおし機』です。',
  },
  {
    src: '/doraemon-item-5.webp',
    alt: 'タイムマシン',
    name: 'タイムマシン',
    price: 100000000000,
    description: '自由に時間を行き来できる道具です。',
  },
  {
    src: '/doraemon-item-6.webp',
    alt: 'タケコプター',
    name: 'タケコプター',
    price: 30000000,
    description: '空に憧れを持つ人間の欲望を刺激するひみつ道具、それがタケコプターです。',
  },
  {
    src: '/doraemon-item-7.webp',
    alt: 'タイムふろしき',
    name: 'タイムふろしき',
    price: 5300000000,
    description:
      '『タイムふろしき』で包まれたものは、その中で時間が逆行、もしくは進行し、古いものは新しく、新しいものは古く生まれ変わります。',
  },
  {
    src: '/doraemon-item-8.webp',
    alt: 'とうめいマント',
    name: 'とうめいマント',
    price: 8000000000,
    description:
      'マントにおおわれたところが透明になる『とうめいマント』です。周りから姿かたちが見えなくなるので、誰にも気づかれること無くこっそり移動できるのが特徴です。',
  },
  {
    src: '/doraemon-item-9.webp',
    alt: 'スモールライト',
    name: 'スモールライト',
    price: 45000000000,
    description:
      '懐中電灯型のライト照射式ひみつ道具で、照射したものの質量を変換して小さくすることができます。',
  },
];

const initialsatate = [];
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, { name: action.name, price: action.price }];
    default:
      return;
  }
};

function Shopping() {
  const [myCart, dispatch] = useReducer(cartReducer, initialsatate);
  const [amount, setAmount] = useState(0);

  const add = (price) => {
    setAmount((prev) => prev + price);
  };

  const item = draItems.map(({ src, alt, name, price, description }) => (
    <Grid item xs={4} key={description}>
      <Card
        className={styles.card}
        onClick={() => {
          dispatch({ type: 'ADD', name: name, price: price });
          add(price);
        }}
      >
        <CardMedia component="img" height="140" image={src} alt={alt} />
        <CardContent>
          <Typography variant="h6" component="div" className={styles.name}>
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(price)}
            （税込）
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ));

  return (
    <div>
      <h1>lets shopping</h1>
      <div className={styles.item_lists}>
        <Cart myCart={myCart} amount={amount} />
        <Grid container spacing={2}>
          {item}
        </Grid>
      </div>
    </div>
  );
}

export default Shopping;
