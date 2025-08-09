import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/header";
import Contacts from "./components/contact";
import Loader from "./components/Loader";

// Pages
import HomePage from "./pages/home";
import ProjectsPage from "./pages/projects";
import AboutPage from "./pages/about";
import LacostPage from "./pages/lacoste";
import ConciexPage from "./pages/conciex";
import RocaPage from "./pages/roca";

const Router = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Header />
      <Contacts />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects/lacoste" element={<LacostPage />} />
        <Route path="/projects/conciex" element={<ConciexPage />} />
        <Route path="/projects/roca" element={<RocaPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
