import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-mtn w-screen fixed absolute fixed h-screen ">
      <Nav></Nav>
      <main>
        <About></About>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
