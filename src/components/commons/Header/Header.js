import styles from './Header.module.scss';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">React</Link>
    </header>
  );
}

export default Header;
