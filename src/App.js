import logo from './logo.svg';
import styles from './App.module.scss';
import Header from './components//commons/Header/Header';
import Lists from './components/for-custom-hooks/Lists/Lists';
import Todo from './components/todo/Todo/Todo';
import UseReducer from './components/useReducer/UseReducer';
import UseRef from './components/useRef/UseRef';
import UseLayoutEffect from './components/useLayoutEffect/UseLayoutEffect';
import MarubatsuGame from './components/marubatsuGame/MarubatsuGame';
import Shopping from './components/shopping/Shopping';
import ExpenseItems from './components/udemy/project1/ExpenseItems';
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
            <Route path="/use-reducer" element={<UseReducer />} />
            <Route path="/use-ref" element={<UseRef />} />
            <Route path="/use-layout-effect" element={<UseLayoutEffect />} />
            <Route path="/marubatsu-game" element={<MarubatsuGame />} />
            <Route path="/shopping" element={<Shopping />} />
            <Route path="/udemy-1" element={<ExpenseItems />} />
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
      <Link className={styles.App_link} to="/use-reducer">
        useReducer
      </Link>
      <Link className={styles.App_link} to="/use-ref">
        useRef
      </Link>
      <Link className={styles.App_link} to="/use-layout-effect">
        useLayoutEffect
      </Link>
      <Link className={styles.App_link} to="/marubatsu-game">
        ○×Game
      </Link>
      <Link className={styles.App_link} to="/shopping">
        shopping
      </Link>
      <Link className={styles.App_link} to="/udemy-1">
        ExpenseItems
      </Link>
    </div>
  );
}
