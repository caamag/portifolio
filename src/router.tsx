import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/home";

// The site is now a single landing page. The old /about and /projects URLs
// still work: they render the same page and scroll to the matching section.
const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<HomePage scrollTo="sobre" />} />
        <Route path="/projects" element={<HomePage scrollTo="projetos" />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
