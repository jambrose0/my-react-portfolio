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
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
