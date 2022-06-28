import "./App.css";
import { useState } from "react";
import useCompiler from "./hooks/useCompiler";
import useUpdateUserState from "./hooks/useUpdateUserState";
import useRealtimeDocsUpdate from "./hooks/useRealtimeDocsUpdate";
import { Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [text, setText] = useState("");
  const compiler = useCompiler();
  //* hook that activates the realtime updates for user state
  useUpdateUserState();
  //* hook that updates the doc state in redux store (REALTIME)
  useRealtimeDocsUpdate();

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* // redirect user yo the mainpage  */}
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
}

export default App;

//TODO:  create a hook for dispatching by passing action argument
