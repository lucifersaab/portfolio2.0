import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles.json";
import "./../CSS/App.css";
import Navbar from "./Navbar";
import Main from "./main";
import Contact from "./Contact";
import Start from "./Start.js";
import { useRef } from "react";

function App() {
  const [page, setPage] = useState("third"); //change this to first

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

  return (
    <div className="App">
      {init && <Particles options={particlesOptions} />}

      {page !== "third" ? (
        <Start setPage={updatePage} page={page}></Start>
      ) : (
        <>
          <Navbar scrollToSection={scrollToSection}></Navbar>
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
