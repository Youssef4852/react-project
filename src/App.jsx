import { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Reel from "./pages/Reel/Reel";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Testimonials from "./pages/Testimonials/Testimonials";
import Faq from "./pages/Faq/Faq";
import Contact from "./pages/Contact/Contact";
import { Route, Router, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NotFound from "./components/NotFound/NotFound";

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
