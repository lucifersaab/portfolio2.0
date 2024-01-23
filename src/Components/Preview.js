import Pacman from "./../Media/Pacman-Game.mp4";
import Splitwise from "./../Media/SplitwiseApp.mp4";
import BurgerApp from "./../Media/BurgerApp.mp4";
import Blender from "./../Media/Blender_Project.mp4";
import { useEffect, useState } from "react";

export default function Preview({ projectPreview }) {
  const [localstate, setLocalState] = useState("");

  useEffect(() => {
    setLocalState(projectPreview);
  }, [localstate, projectPreview]);

  return (
    <>
      <div className={localstate === "" ? "hide" : "preview-container"}>
        <div className="centered-div" style={{ margin: "30px auto" }}>
          Project Preview
        </div>

        <video controls className="video-preview" key={localstate}>
          {localstate === "Pacman-Game" && (
            <source src={Pacman} type="video/mp4" />
          )}
          {localstate === "Blender Project" && (
            <source src={Blender} type="video/mp4" />
          )}
          {localstate === "Burger App" && (
            <source src={BurgerApp} type="video/mp4" />
          )}
          {localstate === "Splitwise App" && (
            <source src={Splitwise} type="video/mp4" />
          )}
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}
