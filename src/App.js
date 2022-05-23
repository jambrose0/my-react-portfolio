// import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="bg-mtn w-screen fixed absolute fixed text-white">
      <Nav></Nav>
      <main className="m-5">
        <About></About>
        <Portfolio></Portfolio>
<<<<<<< HEAD
        <Contact></Contact>
=======
>>>>>>> parent of c13db4a (contact form appears and validates email)
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
