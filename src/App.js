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
import Jsode from './components/jscode/Jscode';
import UseContext from './components/useContext/UseContext';
import CourseGoals from './components/udemy/project2/CourseGoals';
import User from './components/udemy/project3/User';
import SideEffect from './components/udemy/project4/SideEffect';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import UseMemo from './components/useMemo/UseMemo';
import PRedux from './components/p-redux/PRedux';

const routerList = [
  {
    path: '/for-custom-hooks',
    element: <Lists />,
    link: 'ForCustomHooks',
  },
  {
    path: '/todo',
    element: <Todo />,
    link: 'Todo',
  },
  {
    path: '/use-reducer',
    element: <UseReducer />,
    link: 'UseReducer',
  },
  {
    path: '/use-ref',
    element: <UseRef />,
    link: 'Useref',
  },
  {
    path: '/use-layout-effect',
    element: <UseLayoutEffect />,
    link: 'UseLayoutEffect',
  },
  {
    path: '/marubatsu-game',
    element: <MarubatsuGame />,
    link: 'MarubatsuGame',
  },
  {
    path: '/shopping',
    element: <Shopping />,
    link: 'Shopping',
  },
  {
    path: '/udemy-1',
    element: <ExpenseItems />,
    link: 'udemy1',
  },
  {
    path: '/jscode',
    element: <Jsode />,
    link: 'JsCode',
  },
  {
    path: '/use-context',
    element: <UseContext />,
    link: 'use-context',
  },
  {
    path: '/udemy-2',
    element: <CourseGoals />,
    link: 'udemy2',
  },
  {
    path: '/udemy-3',
    element: <User />,
    link: 'udemy3',
  },
  {
    path: '/udemy-4',
    element: <SideEffect />,
    link: 'udemy4',
  },
  {
    path: '/use-memo',
    element: <UseMemo />,
    link: 'use-memo',
  },
  {
    path: '/p-redux',
    element: <PRedux />,
    link: 'p-redux',
  },
];

function App() {
  return (
    <>
      <div className={styles.App}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Top />} />
            {routerList.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
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
      {routerList.map(({ path, link }) => (
        <Link key={path} className={styles.App_link} to={path}>
          {link}
        </Link>
      ))}
    </div>
  );
}
