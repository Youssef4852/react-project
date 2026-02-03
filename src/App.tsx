import { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home.js";
import Reel from "./pages/Reel/Reel.js";
import About from "./pages/About/About.js";
import Projects from "./pages/Projects/Projects.js";
import Testimonials from "./pages/Testimonials/Testimonials.js";
import Faq from "./pages/Faq/Faq.js";
import Contact from "./pages/Contact/Contact.js";
import { Route, Router, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.js";
import NotFound from "./components/NotFound/NotFound.js";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
        <Route
          path="/"
          element={
            <Layout>
              <Home />
              <Reel />
              <Projects />
              <About />
              <Testimonials />
              <Faq />
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/reel"
          element={
            <Layout>
              <Reel />
            </Layout>
          }
        />
        <Route
          path="/projects"
          element={
            <Layout>
              <Projects />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/testimonials"
          element={
            <Layout>
              <Testimonials />
            </Layout>
          }
        />
        <Route
          path="/faq"
          element={
            <Layout>
              <Faq />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
