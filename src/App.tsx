import { Route, Routes } from "react-router"
import { Home } from "./components/home"
import { About } from "./components/about"
import { Play } from "./components/play"
import { Footer } from "./components/footer";
import { Project } from "./components/project";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/play" element={<Play />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
