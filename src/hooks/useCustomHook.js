import { useState, useEffect } from 'react';

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
