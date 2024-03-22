import React from 'react';

function PageLayout({ children }) {

  // 使用 Navbar 组件替换之前的导航栏代码
  
  return (
    <>
      <main className="flex-grow bg-gray-100">
        <div className="container mx-auto py-8">
          {children}
        </div>
      </main>
      <footer className="bg-green-200 text-gray-800 py-4">
        <div className="container mx-auto text-center">
          © 2024 My Brand. All rights reserved.
        </div>
      </footer>
      </>  );
}

export default PageLayout;