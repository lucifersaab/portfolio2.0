import { useEffect, useState } from "react";
import Skills from "./Skills";
import "./../CSS/App.css";
import Intro from "./Intro";
import About from "./About";
import Projects from "./Projects";
import PhoneNavbar from "./PhoneNavbar";

export default function Main({
  scrollToSection,
  section1Ref,
  section2Ref,
  section4Ref,
}) {
  const [projectPreview, setProjectPreview] = useState("");

  const handlePreview = (preview) => {
    setTimeout(() => {
      window.scrollTo({ top: 1400, behavior: "smooth" });
    }, 1000);
    setProjectPreview(preview);
  };

  useEffect(() => {
    console.log(projectPreview);
  });
  return (
    <>
      <div style={{position:'sticky',top:0}}><PhoneNavbar scrollToSection={scrollToSection}></PhoneNavbar></div>

      <Intro></Intro>
      <About section1Ref={section1Ref}></About>
      <div ref={section2Ref}></div>
      <Skills setState={handlePreview}></Skills>
      <Projects section4Ref={section4Ref}></Projects>
      {/* <Preview projectPreview={projectPreview}></Preview> */}
    </>
  );
}
