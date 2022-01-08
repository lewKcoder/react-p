import logo from './logo.svg';
import styles from './App.module.scss';
import Lists from './components/custom-hooks/Lists/Lists';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/list" element={<Lists />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

function Top() {
  return (
    <div className={styles.App_header}>
      <img src={logo} className={styles.App_logo} alt="logo" />
      <p>lets react!!!!</p>
      <Link className={styles.App_link} to="/list">
        list
      </Link>
    </div>
  );
}
