import React from 'react';
import styles from './Cart.module.scss';

function Cart({ myCart, amount }) {
  const item = myCart.map(({ name, price }) => (
    <li className={styles.li}>
      <span className={styles.name}>{name}</span>
      <span className={styles.price}>
        {new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(price)}
      </span>
    </li>
  ));
  return (
    <div className={styles.cart}>
      <div className={styles.amount}>
        <div className={styles.titles}>
          <b>my Cart</b>
          <b>合計金額</b>
        </div>
        <p>
          {new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(amount)}
        </p>
      </div>
      <ul className={styles.ul}>{item}</ul>
    </div>
  );
}

export default Cart;
