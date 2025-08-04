import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Header from "./components/header";
import Contacts from "./components/contact";

//pages
import HomePage from "./pages/home";
import ProjectsPage from "./pages/projects";
import AboutPage from "./pages/about";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Contacts />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
