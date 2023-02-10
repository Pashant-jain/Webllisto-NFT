import "./App.css";
import {
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';
import { Home } from "./pages/home/home";
import {Connect} from "./pages/connect/connect";
import { Gallery } from "./pages/gallery/gallery";
import {Create} from "./pages/create/create";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { routeMap } from "./rout-map";
import { Detail } from "./components/detail/detail";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route exact  path={routeMap.Home} element={<Home/> } />
        <Route exact  path={routeMap.Gallery} element={<Gallery/>} />
        <Route exact  path={routeMap.Create} element={<Create/>} />
        <Route exact  path={routeMap.Connect} element={<Connect/>} />
        {/* <Route exact path={`${routeMap.Gallery}/:id`}  element={<Detail/>} /> */}
      </Routes>
      <Footer/>
      <ToastContainer />
    </>
  );
}

export default App;
