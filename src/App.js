import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Allgun from "./components/Allguns/Allgun";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const increaseCart = () => setCount(count + 1);
  return (
    <div className="App">
      <Navbar count={count}></Navbar>
      <Allgun increaseCart={increaseCart}></Allgun>
    </div>
  );
}

export default App;
