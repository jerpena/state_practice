import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./components/Menu";
import Header from "./components/Header";

import Home from "./pages/Home";
import Boxes from "./pages/Boxes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div class="columns is-mobile">
        <div class="column is-one-fifth">
          <Menu />
        </div>
        <div className="column">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/boxes" element={<Boxes />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;