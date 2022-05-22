import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";

function App() {
  return (
    <div className="bg-mtn w-screen fixed absolute fixed h-screen ">
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
