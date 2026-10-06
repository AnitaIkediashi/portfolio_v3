import { Route, Routes } from "react-router";
import { Footer } from "./components/footer";
import { About, Home, NotFound, Play, Project } from "./components/pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/play" element={<Play />} />
        <Route path="/project" element={<Project />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
