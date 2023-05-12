import "./App.css";
import SignIn from "./pages/Signin/SignIn";
//import Carousel from "./components/Carousel/Carousel";
//import Caro from "./components/Carousel/Carousel";
//import Item from "./components/Carousel/Item";
import Home from "./pages/Home/Home";
//import SignIn from "./pages/Signin/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CarDetails from "./components/CarDetails/CarDetails";
import Bottom from "./components/Bottom/Bottom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/ourcars" element={<CarDetails />}></Route>
          <Route exact path="/sign" element={<SignIn />}></Route>
          <Route exact path="/contact" element={<Bottom />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
