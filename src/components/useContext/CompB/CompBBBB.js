import { useContext } from 'react';
import { colorContext } from './CompB';

export default function CompBBBB() {
  const color = useContext(colorContext);

  return <div>{color}</div>;
}
