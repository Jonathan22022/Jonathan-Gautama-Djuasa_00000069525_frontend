import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Fact from "./pages/Fact";
/*mengatur segala routing web kita*/
const App = () => {
  return (
    <BrowserRouter>{/*menyediakan konteksuntuk routing*/}
      <Routes>
        <Route path="/" element={<Home />} />{/*route halaman home*/}
        <Route path="/fact" element={<Fact />} />{/*route halaman fact*/}
        <Route path="*" element={<Navigate to="/" />} />{/*route fallback jika tidak ada route*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
