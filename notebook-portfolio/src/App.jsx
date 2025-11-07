import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotebookLayout from "./components/NotebookLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Art from "./pages/Art";
import Coding from "./pages/Coding";

export default function App() {
  return (
    <Router>
      <NotebookLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/art" element={<Art />} />
          <Route path="/coding" element={<Coding />} />
        </Routes>
      </NotebookLayout>
    </Router>
  );
}
