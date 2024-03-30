// App.js
import React from 'react';
import NavBar from './components/NavBar';
import PageLayout from './components/PageLayout';
import Footer from './components/Footer';
import { PostComponentProvider } from './components/PostComponentContext';

const App = () => {

  return (
    <PostComponentProvider>
      <NavBar />
      <PageLayout>
      </PageLayout>
      <Footer />
    </PostComponentProvider>
  );
};

export default App;
