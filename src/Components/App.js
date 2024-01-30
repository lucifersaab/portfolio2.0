import React, { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles.json";
import darkparticles from "./particles2.json";
import "./../CSS/App.css";
import Navbar from "./Navbar";
import Main from "./main";
import Contact from "./Contact";
import Start from "./Start.js";
import { useRef } from "react";
import { loadSlim } from "tsparticles-slim";

function App() {
  const [page, setPage] = useState("third"); //change this to first
  const [darkMode, setDarkMode] = useState(true);

  const changeTheme = () => {
    setDarkMode(!darkMode);
  };

  const updatePage = (val) => {
    setPage(val);
  };
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const scrollToSection = (sectionRef) => {
    console.log(sectionRef);
    let sr;
    if (sectionRef === "section1Ref") {
      sr = section1Ref;
    } else if (sectionRef === "section2Ref") {
      sr = section2Ref;
    } else if (sectionRef === "section3Ref") {
      sr = section3Ref;
    } else {
      sr = section4Ref;
    }
    if (sr.current) {
      sr.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [init, setInit] = useState(false);

  useEffect(() => {
    if (init) {
      return;
    }
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, [init]);
  // const particlesInit = useCallback(async (engine) => {
  //   console.log(engine);
  //   // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
  //   // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  //   // starting from v2 you can add only the features you need reducing the bundle size
  //   //await loadFull(engine);
  //   await loadSlim(engine);
  // }, []);

  // const particlesLoaded = useCallback(async (container) => {
  //   await console.log(container);
  // }, []);

  return (
    <div className="App">
      {/* <button
        onClick={changeTheme}
        className={darkMode ? "change-theme" : "dark-change-theme"}
      >
        Change theme
      </button> */}

      {init && <Particles options={particlesOptions} />}

      {page !== "third" ? (
        <Start setPage={updatePage} page={page}></Start>
      ) : (
        <>
          <Navbar
            darkMode={darkMode}
            scrollToSection={scrollToSection}
          ></Navbar>
          <Main
            scrollToSection={scrollToSection}
            section1Ref={section1Ref}
            section2Ref={section2Ref}
            section4Ref={section4Ref}
          ></Main>
          <Contact></Contact>
          <div ref={section3Ref}></div>
        </>
      )}
    </div>
  );
}

export default App;
