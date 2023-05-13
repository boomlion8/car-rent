import "./App.css";
import SignIn from "./pages/Signin/SignIn";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CarDetails from "./components/CarDetails/CarDetails";
import Bottom from "./components/Bottom/Bottom";
function App() {
  return (
    <>
      <BrowserRouter basename="/car-rent">
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
