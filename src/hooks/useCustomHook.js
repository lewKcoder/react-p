import { useState, useEffect, useRef, useContext, createContext, useMemo } from 'react';

export function useCustomNumberHook(e, d) {
  const [customData, setCustomData] = useState(false);

  useEffect(() => {
    setCustomData(e / d);
  }, []);
  return customData;
}

export function useCustomJsonHook(s) {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${s}`);
      const lists = await response.json();
      setLists(lists.slice(0, 6));
    };
    fetchUser();
  }, [s]);
  return lists;
}

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue.title);
  const [type, setType] = useState(initialValue.type);
  return [{ value, type, onChange: (e) => setValue(e.target.value) }, () => setValue(initialValue)];
};

export const useColorPicker = (initialValue) => {
  const [color, setColor] = useState(initialValue.color);
  const colorValue = useRef();
  const selectColor = () => {
    setColor(colorValue.current.value);
  };

  return { value: color, ref: colorValue, onChange: () => selectColor() };
};

// export const useJazzyNews = () => {
//   const [_posts, setPosts] = useState([]);
//   const addPost = (post) => setPosts((allPost) => [post, ...addPost]);

//   const posts = useMemo(_posts, [_posts]);

//   useEffect(() => {
//     newPostChime.play();
//   }, [posts]);

//   useEffect(() => {
//     newsFeed.subscribe(addPost);
//     return () => newsFeed.unsubscribe(addPost);
//   }, []);

//   useEffect(() => {
//     welcomeChime.play();
//     return () => goodbyeChime.play();
//   }, []);
// };
