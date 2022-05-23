// import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-mtn w-screen fixed absolute fixed text-white">
      <Nav></Nav>
      <main className="">
        <About></About>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
