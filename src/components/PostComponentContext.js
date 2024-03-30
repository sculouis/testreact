import React, { createContext, useState, useContext } from 'react';

const PostComponentContext = createContext();

export const usePostComponent = () => useContext(PostComponentContext);

export const PostComponentProvider = ({ children }) => {
  const [showComponent, setComponent] = useState('Home');

  return (
    <PostComponentContext.Provider value={{ showComponent, setComponent }}>
      {children}
    </PostComponentContext.Provider>
  );
};
