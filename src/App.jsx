import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import CV from "./pages/CV";
import About from "./pages/About";
import NavBar from "./components/Navbar";

export default function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}