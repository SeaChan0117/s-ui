import React, { useState } from 'react';
import './App.scss';
import LeftMenu from './LeftMenu';
import ShowCotainer from './ShowCotainer';

function App() {

  const [activeMenu, setActiveMenu] = useState<string>('Block');

  return (
    <div className="app">
      <LeftMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <ShowCotainer activeMenu={activeMenu} />
    </div>
  );
}

export default App;
