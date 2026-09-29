import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achivements from "./components/Achivements";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Achivements />
        <Contact/>

      </main>
    </>
  );
}

export default App;