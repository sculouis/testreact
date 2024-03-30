import React from 'react';
import { usePostComponent } from './PostComponentContext';
import PostComponent from './PostComponent';
import HomeComponent from './HomeComponent';
import AboutComponent from './About';
import ContactComponent from './Contact';

function PageLayout() {

  const { showComponent } = usePostComponent();
  // 使用 Navbar 组件替换之前的导航栏代码
  
  return (
      <main className="flex-grow bg-gray-100">
        <div className="container mx-auto py-8">
        { showComponent === 'Home'?<HomeComponent />:showComponent === 'Services'?<PostComponent />:showComponent === 'About'?<AboutComponent />:showComponent === 'Contact'?<ContactComponent />:''  }
        </div>
      </main>
    );
}

export default PageLayout;