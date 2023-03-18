import * as React from 'react';
import { useTime } from '../../hooks';

export const Time: React.FC = () => {
  useTime();
  return <div>time</div>;
};
