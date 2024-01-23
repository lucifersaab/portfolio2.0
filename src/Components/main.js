import { useEffect, useState } from "react";
import Header from "./Header";
import Skills from "./Skills";
import Preview from "./Preview";
import "./../CSS/App.css";

export default function Main({ section1Ref, section2Ref }) {
  const intro =
    " Hello World! I am Ahmad Hashim Farooq, a programmer. I am a computer science major at COMSATS University Lahore. I started working with react last summers and couldnt stop since. I am in love with frontend designing all thanks to the internship I did last year. I am interested in Data Science as well and would like to work in a field where I design stuff as well as analyze data.";

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
      <div ref={section1Ref} className="main-div">
        <div className="heading-cont">
          <Header
            display={"Welcome to my portfolio!"}
            delay={200}
            repeat={true}
          ></Header>
        </div>
        {/* <div className="intro-para"> */}
        <Header display={intro} delay={15} repeat={false}></Header>
        {/* </div> */}
      </div>
      <div ref={section2Ref}></div>
      <Skills setState={handlePreview}></Skills>
      <Preview projectPreview={projectPreview}></Preview>
    </>
  );
}
