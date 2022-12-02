import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Frame from "./components/Frame";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Summary from "./pages/Summary";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Frame />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
