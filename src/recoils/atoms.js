import { atom, selector } from 'recoil';

export const textState = atom({
  key: 'textState',
  default: '',
});

export const todoListState = atom({
  key: 'TodoList',
  default: [],
});

export const charCountState = selector({
  key: 'charCountState',
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});
