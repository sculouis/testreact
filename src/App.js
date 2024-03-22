// App.js
import React from 'react';
import { MenuProvider } from './components/MenuContext';
import NavBar from './components/NavBar';
import PageLayout from './components/PageLayout';

const App = () => {
  return (
    <MenuProvider>
      <NavBar />
      <PageLayout>
        {/* 应用的其他部分 */}
      </PageLayout>
    </MenuProvider>
  );
};

export default App;
