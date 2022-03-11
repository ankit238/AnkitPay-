import React from "react";
import Home from "./Home";
import {Routes,Route} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Error from "./pages/Error";


const App = () => {
  return (
    <>
      <Routes>
      

        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/service" element={<Service />}></Route>



        <Route element={<Error />}></Route>
        </Routes>
    </>
  );
};

export default App;
