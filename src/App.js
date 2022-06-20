import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import useCompiler from "./hooks/useCompiler";

function App() {
  const [text, setText] = useState("");
  const compiler = useCompiler();

  

  return (
    <div className="App">
      <Header />
     
    </div>
  );
}

export default App;
