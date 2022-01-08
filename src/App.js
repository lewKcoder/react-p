import logo from './logo.svg';
import styles from './App.module.scss';
import Header from './components//commons/Header/Header';
import Lists from './components/for-custom-hooks/Lists/Lists';
import Todo from './components/todo/Todo/Todo';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <div className={styles.App}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Top />} />
            <Route path="/for-custom-hooks" element={<Lists />} />
            <Route path="/todo" element={<Todo />} />
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
      <Link className={styles.App_link} to="/for-custom-hooks">
        custom hooks
      </Link>
      <Link className={styles.App_link} to="/todo">
        todo
      </Link>
    </div>
  );
}
