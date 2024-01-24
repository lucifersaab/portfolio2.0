import Header from "./Header";
import Intro from "./Intro";
import tweety from "./../Media/tweety_gif.gif";
export default function About({ section1Ref }) {
  const intro =
    "I'm a Computer Science major at COMSATS University Lahore, and I'm passionate about both front-end design and data science. My journey into the world of web development began last summer when I started working with React, and I haven't been able to stop since. I fell in love with the art of creating stunning and user-friendly interfaces during an internship I completed last year. Now, I'm excited to blend my creative skills with my analytical prowess in the field of Data Science. My goal is to work in a role where I can design captivating user experiences while diving deep into the world of data analysis. \n  \n <-- Me working with react";

  return (
    <>
      <div ref={section1Ref}></div>
      <div className="centered-div">
        <h2>ABOUT</h2>
      </div>
      <div className="main-div">
        <div className="about-container">
          <div className="left-div">
            <img className="tweety-gif" src={tweety} alt="programming" />
          </div>
          <div className="right-text-div">{intro}</div>
        </div>
      </div>
    </>
  );
}
