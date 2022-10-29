import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom";
import {
  
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from "./pages/home/home";
import {Connect} from "./pages/connect/connect";
import { Gallery } from "./pages/gallery/gallery";
import {Create} from "./pages/create/create";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route exact  path="/" element={<Home/> } />
        <Route exact  path="/gallery" element={<Gallery/>} />
        <Route exact  path="/create" element={<Create/>} />
        <Route exact  path="connect" element={<Connect/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
