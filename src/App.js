import logo from './logo.svg';
import styles from './App.module.scss';
import Header from './components//commons/Header/Header';
import Lists from './components/for-custom-hooks/Lists/Lists';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <div className={styles.App}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Top />} />
            <Route path="/customhooks-p" element={<Lists />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

function Top() {
  return (
    <div className={styles.App_header}>
      <img src={logo} className={styles.App_logo} alt="logo" />
      <p>lets react!!!!</p>
      <Link className={styles.App_link} to="/customhooks-p">
        custom hooks
      </Link>
    </div>
  );
}
