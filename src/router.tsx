import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Header from "./components/header";

//pages
import HomePage from "./pages/home";
import ProjectsPage from "./pages/projects";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
