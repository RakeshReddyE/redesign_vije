import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import IndividualProject from '../pages/individualproject';
import Projects from '../pages/projects';
import NotFound from '../pages/notfound';
import About from '../pages/about';
import Services from '../pages/services';
import Blogs from '../pages/blogs';
import Contact from '../pages/contact';
import IndividualBlog from '../pages/individualblog';
import PrivacyPolicy from '../pages/privacypolicy';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/name" element={<IndividualProject />} />
        <Route path="/insights" element={<Blogs />} />
        <Route path="/insights/:title" element={<IndividualBlog />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
