import { useColorPicker } from '../../../hooks/useCustomHook';
import CompAA from './CompAA';

function CompA() {
  const useColorPickers = useColorPicker({ color: '#4e4e4e' });

  return (
    <>
      <h4>don`t use useContext</h4>
      <input type="color" {...useColorPickers} />
      <CompAA color={useColorPickers.value} />
    </>
  );
}

export default CompA;
