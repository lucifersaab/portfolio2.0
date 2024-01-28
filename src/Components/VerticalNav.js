import git from "./../Media/git.png";
import insta from "./../Media/insta.png";
import linkedin from "./../Media/link.png";

export default function VerticalNav({ scrollToSection }) {
  return (
    <>
      <div className="vertical-container" id="vert-navbar">
        <div className="vertical-navbar">
          <div className="vert-nav-links">
            {" "}
            <div
              className="vert-navbar-content"
              onClick={() => scrollToSection("section1Ref")}
            >
              ABOUT
            </div>
            <div
              className="vert-navbar-content"
              onClick={() => scrollToSection("section2Ref")}
            >
              SKILLS
            </div>
            <div
              className="vert-navbar-content"
              onClick={() => scrollToSection("section4Ref")}
            >
              PROJECTS
            </div>
            <div
              className="vert-navbar-content"
              onClick={() => scrollToSection("section3Ref")}
            >
              CONTACT
            </div>
          </div>
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
        </div>
      </div>
    </>
  );
}
