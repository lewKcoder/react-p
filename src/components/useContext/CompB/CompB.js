import { useColorPicker } from '../../../hooks/useCustomHook';
import { createContext } from 'react';
import CompBB from './CompBB';

export const colorContext = createContext();

export default function CompB() {
  const useColorPickers = useColorPicker({ color: '#000' });

  return (
    <colorContext.Provider value={useColorPickers.value}>
      <h4>use useContext</h4>
      <input type="color" {...useColorPickers} />
      <CompBB />
    </colorContext.Provider>
  );
}
