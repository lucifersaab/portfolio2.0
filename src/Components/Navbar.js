import "./../CSS/App.css";
import linkedin from "./../Media/link.png";
import git from "./../Media/git.png";
import insta from "./../Media/insta.png";
export default function Navbar({ scrollToSection }) {
  return (
    <>
      <div className="nav-container">
        <div className="navbar">
          <div className="name">Ahmad Hashim Farooq</div>
          <div className="nav-links">
            {" "}
            <div
              className="navbar-content"
              onClick={() => scrollToSection("section1Ref")}
            >
              ABOUT
            </div>
            <div
              className="navbar-content"
              onClick={() => scrollToSection("section2Ref")}
            >
              SKILLS
            </div>
            <div
              className="navbar-content"
              onClick={() => scrollToSection("section4Ref")}
            >
              PROJECTS
            </div>
            <div
              className="navbar-content"
              onClick={() => scrollToSection("section3Ref")}
            >
              CONTACT
            </div>
          </div>
          <div className="nav-socials">
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
          </div>
        </div>
      </div>
    </>
  );
}
