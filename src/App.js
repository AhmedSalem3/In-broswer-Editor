import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import useCompiler from "./hooks/useCompiler";
import useUpdateUser from "./hooks/useUpdateUser";
import Editor from "./components/pages/Editor/Editor";
import { Box } from "@mui/material";

const styles = {
  app: { backgroundColor: "primary.black" }
};

function App() {
  const [text, setText] = useState("");
  const compiler = useCompiler();
  //* hook that activates the realtime updates for user state
  useUpdateUser();

  return (
    <Box className="App" sx={styles.app}>
      <Header />
      <Editor />
    </Box>
  );
}

export default App;
