import Spline from "@splinetool/react-spline";
import { useState } from "react";
import up from "./../Media/up.png";
import down from "./../Media/down.png";
import refresh from "./../Media/refresh.png";
import search from "./../Media/search.png";

export default function Projects({ section4Ref }) {
  const [displayProjects, setDisplayProjects] = useState(false);
  const handleclick = () => {
    setDisplayProjects(true);
  };
  const closePopup = () => {
    setDisplayProjects(false);
  };
  return (
    <>
      <div ref={section4Ref}></div>
      <Spline
        onClick={handleclick}
        scene="https://prod.spline.design/1hn6pUDV5jbdLWDC/scene.splinecode"
      />

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
          <h2>PROJECTS HERE</h2>
        </div>
      </div>
    </>
  );
}
