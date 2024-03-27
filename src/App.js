// App.js
import React from 'react';
import NavBar from './components/NavBar';
import PageLayout from './components/PageLayout';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <NavBar />
      <PageLayout>
        {/* 应用的其他部分 */}
      </PageLayout>
      <Footer />
    </>
  );
};

export default App;
