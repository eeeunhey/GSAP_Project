import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import { GsapTo } from "./pages/GsapTo";
import GsapFrom from "./pages/GsapFrom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gaspTo" element={<GsapTo />} />
      <Route path="/gaspFrom" element={<GsapFrom />} />
    </Routes>
  );
}

export default App;
