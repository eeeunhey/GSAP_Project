import { Routes, Route } from "react-router-dom";
import './App.css'
import { GsapTo } from "./pages/GsapTo";


function App() {


  return (
    <Routes>
      <Route path="/gaspTo" element={<GsapTo/>}/>
    </Routes>
  )
}

export default App
