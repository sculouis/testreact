// App.js
import React from "react";
import NavBar from "./components/NavBar";
import Slide from "./components/Slide";
import About from "./components/About";
import Contact from "./components/Contact";
import PostCompoent from "./components/PostComponent";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <main className="container mx-auto mb-5 mt-5">
        <Routes>
          <Route path="/" element={<Slide></Slide>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="/service" element={<PostCompoent></PostCompoent>} />
          <Route path="*" element={<ErrorPage></ErrorPage>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
