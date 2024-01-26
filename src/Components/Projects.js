import Spline from "@splinetool/react-spline";
import { useState, useEffect } from "react";
import up from "./../Media/up.png";
import down from "./../Media/down.png";
import refresh from "./../Media/refresh.png";
import search from "./../Media/search.png";
import Thumbnail from "./Thumbnail";
import pacthumb from "./../Media/Pacman-thumb.png";
import splitthumb from "./../Media/Splitwise-thumb.png";
import blenthumb from "./../Media/Blender-thumb.png";
import burgerthumb from "./../Media/BurgerApp-thumb.png";
import Pacman from "./../Media/Pacman-Game.mp4";
import Splitwise from "./../Media/SplitwiseApp.mp4";
import BurgerApp from "./../Media/BurgerApp.mp4";
import Blender from "./../Media/Blender_Project.mp4";
import Header from "./Header";

export default function Projects({ section4Ref }) {
  const [displayProjects, setDisplayProjects] = useState(false);
  const [displayVideo, setDisplayVideo] = useState("");
  const projects = [
    { text: "PACMAN GAME", image: pacthumb },
    { text: "SPLITWISE APP", image: splitthumb },
    { text: "BLENDER PROJECT", image: blenthumb },
    { text: "BURGER APP", image: burgerthumb },
  ];
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  useEffect(() => {
    // Lazy loading logic here, e.g., IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsSplineLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const splineElement = document.getElementById("spline-element");
    if (splineElement) observer.observe(splineElement);

    return () => observer.disconnect();
  }, []);

  const handleclick = () => {
    setDisplayProjects(true);
  };
  const closePopup = () => {
    setDisplayProjects(false);
  };
  const openVideo = (val) => {
    setDisplayVideo(val);
    console.log(displayVideo);
  };
  return (
    <>
      <div ref={section4Ref}></div>
      <div id="spline-element">
        {!isSplineLoaded && (
          <div className="centered-div">
            <Header
              display="LOADING PROJECTS..."
              delay={20}
              repeat={true}
            ></Header>{" "}
          </div>
        )}
        {isSplineLoaded && (
          <Spline
            onClick={handleclick}
            scene="https://prod.spline.design/1hn6pUDV5jbdLWDC/scene.splinecode"
          />
        )}
      </div>

      <div
        className={displayProjects ? "popup" : " hide-popup"}
        id={displayProjects}
      >
        <div className="popup-content">
          <div className="popup-header">
            <div
              className="left-col"
              style={{
                color: "white",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <div className="tab">Projects</div>
            </div>
            <div
              className="right-col"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <button onClick={closePopup} className="close-button">
                X
              </button>
            </div>
            <div className="popup-header-content">
              <img src={up} alt="up"></img>
              <img src={down} alt="down"></img>
              <img src={refresh} alt="refresh"></img>
              <div className="file-path">Home\Projects</div>
              <div className="file-path" style={{ width: "30%" }}>
                <img src={search} alt="search"></img>
                <div style={{ paddingLeft: "10px" }}>Search</div>
              </div>
            </div>
          </div>
          <div className="thumbnail-container">
            <div
              className={
                displayVideo === "" ? "thumbnail-container" : "hide-vid"
              }
            >
              {projects.map((project) => {
                return (
                  <Thumbnail
                    text={project.text}
                    image={project.image}
                    openVideo={openVideo}
                  ></Thumbnail>
                );
              })}
            </div>

            <div
              className={displayVideo === "" ? "hide-vid" : "preview-container"}
            >
              <button
                className="close-vid"
                onClick={() => {
                  setDisplayVideo("");
                }}
              >
                X
              </button>
              <h2>{displayVideo}</h2>
              <video controls className="video-preview" key={displayVideo}>
                {displayVideo === "PACMAN GAME" && (
                  <source src={Pacman} type="video/mp4" />
                )}
                {displayVideo === "BLENDER PROJECT" && (
                  <source src={Blender} type="video/mp4" />
                )}
                {displayVideo === "BURGER APP" && (
                  <source src={BurgerApp} type="video/mp4" />
                )}
                {displayVideo === "SPLITWISE APP" && (
                  <source src={Splitwise} type="video/mp4" />
                )}
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
