import "./App.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:meetupId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
