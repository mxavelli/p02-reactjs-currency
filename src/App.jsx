import React from 'react';
import { Currency } from './components/Currency';
import Header from './components/Header.jsx';

function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-10 flex md:w-2/3 mx-auto">
        <Currency />
      </div>
    </div>
  );
}

export default App;
