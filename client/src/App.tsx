import React from 'react';

import { Metric, Time } from './components';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <Time />
      <Metric />
    </div>
  );
};

export default App;
