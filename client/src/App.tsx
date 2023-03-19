import React from 'react';

import { Metric, Time } from './components';
import './App.css';

const App: React.FC = () => {
  return (
    <div
      className="bg-gradient-to-r from-cyan-100 to-blue-100 
    h-screen w-screen overflow-scroll flex 
    justify-center items-center space-x-4  flex-wrap"
    >
      <Time />
      <Metric />
    </div>
  );
};

export default App;
