import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import useCompiler from "./hooks/useCompiler";
import useUpdateUserState from "./hooks/useUpdateUserState";
import useRealtimeDocsUpdate from "./hooks/useRealtimeDocsUpdate";
import Editor from "./components/pages/Editor/Editor";
import { Box } from "@mui/material";
import AppDrawer from "./components/Drawer/AppDrawer";

const styles = {
  app: { backgroundColor: "primary.black" }
};

function App() {
  const [text, setText] = useState("");
  const compiler = useCompiler();
  //* hook that activates the realtime updates for user state
  useUpdateUserState();
  //* hook that updates the doc state in redux store (REALTIME)
  useRealtimeDocsUpdate();

  return (
    <Box className="App" sx={styles.app}>
      <Header />
      <AppDrawer />
      <Editor />
    </Box>
  );
}

export default App;
