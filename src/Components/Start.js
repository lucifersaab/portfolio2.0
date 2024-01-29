import "./../CSS/App.css";
import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import space from "./../Media/space.mp4";

export default function Start({ setPage, page }) {
  const [display, setDisplay] = useState(false);

  setTimeout(() => {
    setDisplay(true);
  }, 4000);

  const videoRef = useRef(null);

  useEffect(() => {
    console.log("useEffect called");
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }

    if (page === "second") {
      setTimeout(() => {
        setPage("third");
      }, 6000);
    }
  }, [page, setPage]);

  const changepage = (val) => {
    setPage(val);
  };

  return (
    <>
      {page === "first" && (
        <div className="start-screen">
          <div className="centered-div">
            <div className="welcome-div">
              <Header
                display="WELCOME STRANGER"
                delay={150}
                repeat={false}
              ></Header>
              <div>
                <button
                  onClick={() => changepage("second")}
                  className={`start-btn ${
                    display ? "show-btn" : "hide-simple"
                  }`}
                >
                  GET STARTED
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {page === "second" && (
        <div className="bg-container">
          <video
            controls={false}
            loop
            autoPlay
            ref={videoRef}
            className="bg-video"
            src={space}
          />
        </div>
      )}
    </>
  );
}
