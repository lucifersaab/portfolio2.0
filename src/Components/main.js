import { useEffect, useState } from "react";
import Skills from "./Skills";
import Preview from "./Preview";
import "./../CSS/App.css";
import Intro from "./Intro";
import About from "./About";

export default function Main({ section1Ref, section2Ref }) {
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
      <Intro></Intro>
      <About section1Ref={section1Ref}></About>
      <div ref={section2Ref}></div>
      <Skills setState={handlePreview}></Skills>
      <Preview projectPreview={projectPreview}></Preview>
    </>
  );
}
