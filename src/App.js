import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom";
import {
  
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./pages/home/home";
import {Connect} from "./pages/connect/connect";
import { Gallery } from "./pages/gallery/gallery";
import {Create} from "./pages/create/create";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/gallery" element={<Gallery/> } />
        <Route path="/create" element={<Create/>} />
        <Route path="connect" element={<Connect/>} />
      </Routes>
    </>
  );
}

export default App;
