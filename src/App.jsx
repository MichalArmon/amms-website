import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./LayOut";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Animation from "./pages/Animation";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";

// תתי־עמודים של Projects
import Interior from "./pages/projects/Interior";
import Exterior from "./pages/projects/Exterior";
import Marketing from "./pages/projects/Marketing";
import Graphics from "./pages/projects/Graphics";
import Creative from "./pages/projects/Creative";
import ProjectsGallery from "./components/ProjectsGallery";
import ProjectsIndex from "./pages/ProjectsIndex";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          {/* עמוד Projects עם תתי־דפים */}
          <Route path="projects" element={<Projects />}>
            <Route index element={<ProjectsIndex />} /> {/* ברירת מחדל */}
            <Route path="interior" element={<Interior />} />
            <Route path="exterior" element={<Exterior />} />
            <Route path="marketing" element={<Marketing />} />
            <Route path="graphics" element={<Graphics />} />
            <Route path="creative" element={<Creative />} />
          </Route>

          <Route path="animation" element={<Animation />} />
          <Route path="clients" element={<Clients />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
