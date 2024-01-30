import linkedin from "./../Media/link.png";
import git from "./../Media/git.png";
import insta from "./../Media/insta.png";
import { useEffect, useState } from "react";

export default function PhoneNavbar({ scrollToSection }) {
  const [displayNav, setDisplayNav] = useState(false);
  var rotate = 22.5;
  const navigation = [
    {
      text: "ABOUT",
      ref: "section1Ref",
    },
    {
      text: "SKILLS",
      ref: "section2Ref",
    },
    {
      text: "PROJECTS",
      ref: "section3Ref",
    },
    {
      text: "CONTACT",
      ref: "section4Ref",
    },
  ];
  // const socials=[{
  //   lin
  // }]

  const setDisplay = () => {
    setDisplayNav(!displayNav);
  };

  useEffect(() => {
    console.log(displayNav);
  }, [displayNav]);
  return (
    <>
      <div className="display-name">
        <h2>Ahmad Hashim Farooq</h2>
        <button onClick={setDisplay} className="navbar-button">
          ____<br></br>
          ____<br></br>
          ____
        </button>
      </div>
      <div
        className={
          "phone-nav-container" + (displayNav ? " display-nav" : " hide-nav")
        }
      >
        <div className="vert-nav-socials">
          <a
            className="nav-socials-a"
            href="https://www.linkedin.com/in/ahmad-hashim-farooq-9a955120a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="nav-socials-img" src={linkedin} alt="linkedIn" />
          </a>
          <a
            className="nav-socials-a"
            href="https://github.com/lucifersaab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="nav-socials-img"
              src={git}
              alt="Github"
              style={{ borderRadius: "40px" }}
            />
          </a>
          <a
            className="nav-socials-a"
            href="https://www.instagram.com/hashimf77/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="nav-socials-img" src={insta} alt="Instagram" />
          </a>
        </div>
        <div className="vert-nav-links">
          {navigation.map((nav, index) => {
            const updated_rotate = Math.abs(rotate * (index + 1)) - 11.25 - 45;
            index++;

            return (
              <div
                className="vert-navbar-content"
                onClick={() => scrollToSection(nav.ref)}
                style={{
                  rotate: updated_rotate + "deg",
                  marginLeft: -Math.abs(updated_rotate * 6) + 120 + "px",
                }}
              >
                {nav.text}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
