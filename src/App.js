import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import useCompiler from "./hooks/useCompiler";

function App() {
  const [text, setText] = useState("");
  const compiler = useCompiler();
  const compiled = compiler(text);
  console.log(compiled);

  function change(e) {
    setText(e.target.value);
  }

  return (
    <div className="App">
      <Header />
      <textarea onInput={change}></textarea>
      {compiled}
    </div>
  );
}

export default App;
