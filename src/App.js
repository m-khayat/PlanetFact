import React from "react";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Earth from "./Pages/Earth";
import Mercury from "./Pages/Mercury";
import Vinus from "./Pages/Venus";
import Mars from "./Pages/Mars";
import Jupiter from "./Pages/Jupiter";
import Saturn from "./Pages/Saturn";
import Uranus from "./Pages/Uranus";
import Neptune from "./Pages/Neptune";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Earth />} />
          <Route path="/earth" element={<Earth />} />
          <Route path="/mercury" element={<Mercury />} />
          <Route path="/venus" element={<Vinus />} />
          <Route path="/mars" element={<Mars />} />
          <Route path="/jupiter" element={<Jupiter />} />
          <Route path="/saturn" element={<Saturn />} />
          <Route path="/uranus" element={<Uranus />} />
          <Route path="/neptune" element={<Neptune />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
