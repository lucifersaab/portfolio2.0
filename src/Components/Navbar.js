import "./../CSS/App.css";
import linkedin from "./../Media/link.png";
import git from "./../Media/git.png";
import insta from "./../Media/insta.png";
import { useEffect, useState } from "react";
import VerticalNav from "./VerticalNav";
export default function Navbar({ scrollToSection }) {
  const [navbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      const navbarPosition = navbar.getBoundingClientRect().top;

      console.log("pos: ", navbarPosition);
      if (navbarPosition < -70) {
        setNavbarVisible(false);
      } else {
        setNavbarVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    console.log(navbarVisible);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navbarVisible]);

  return (
    <>
      <div className="nav-container" id="navbar">
        <div className="navbar">
          <div className={"name"}>Ahmad Hashim Farooq</div>
          <div className="nav-links">
            {" "}
            <div
              className={"navbar-content"}
              onClick={() => scrollToSection("section1Ref")}
            >
              ABOUT
            </div>
            <div
              className={"navbar-content"}
              onClick={() => scrollToSection("section2Ref")}
            >
              SKILLS
            </div>
            <div
              className={"navbar-content"}
              onClick={() => scrollToSection("section4Ref")}
            >
              PROJECTS
            </div>
            <div
              className={"navbar-content"}
              onClick={() => scrollToSection("section3Ref")}
            >
              CONTACT
            </div>
          </div>
          <div className="navbar-socials">
            <a
              href="https://www.linkedin.com/in/ahmad-hashim-farooq-9a955120a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="linkedIn" />
            </a>
            <a
              href="https://github.com/lucifersaab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={git} alt="Github" style={{ borderRadius: "40px" }} />
            </a>
            <a
              href="https://www.instagram.com/hashimf77/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={insta} alt="Instagram" />
            </a>
            {/* <Whatsapp></Whatsapp> */}
          </div>
        </div>
      </div>

      <div
        className={navbarVisible ? "hide" : "show-btn"}
        style={{ position: "absolute" }}
      >
        {" "}
        <VerticalNav scrollToSection={scrollToSection}></VerticalNav>
      </div>
    </>
  );
}
