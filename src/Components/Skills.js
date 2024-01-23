import "./../CSS/App.css";
import react from "./../Media/react.png";
import java from "./../Media/java.png";
import sql from "./../Media/SQL.png";
import C from "./../Media/C.png";
import Blender from "./../Media/Blender.png";
import back from "./../Media/back.png";
import next from "./../Media/next.png";
import Card from "./Card";
import { useState, useEffect } from "react";
export default function Skills(props) {
  const [page, setPage] = useState(0);

  const skills = [
    {
      name: "React JS",
      img: react,
      desc: "I have been working with react for a while now and have made some projects such as burger app, splitwise app and this website!",
      projects: ["Splitwise App", "Burger App"],
      progress: "85%",
    },
    {
      name: "Java",
      img: java,
      desc: "I have been working with java for more than a year now and have made some projects such as Pacman Game!",
      projects: ["Pacman-Game"],
      progress: "80%",
    },
    {
      name: "Blender",
      img: Blender,
      desc: "I have recently started working with blender and have made a small animation as a project!",
      projects: ["Blender Project"],
      progress: "75%",
    },
    {
      name: "C",
      img: C,
      desc: "Made a project using C in which I created a terminal which worked like the real Ubuntu shell for some commands!",
      projects: ["Ubuntu Shell"],
      progress: "70%",
    },
    {
      name: "SQL",
      img: sql,
      desc: "I have worked with SQL and no SQL both databases. I have experience with SQL SERVER and Firebase. I have done a project using MS SQL SERVER where I designed a schema, some views, functions, validations and much more!",
      projects: [],
      progress: "85%",
    },
  ];

  const updatePage = (id) => {
    if (id === "prevpage") {
      if (page === 0) {
        setPage(4);
      } else setPage(page - 1);
    } else {
      setPage((page + 1) % 5);
    }

    console.log(page);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prevPage) => (prevPage + 1) % skills.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [page, skills.length]);

  return (
    <>
      <div className="skills-container">
        <div className="centered-div">
          <h2>SKILLS AND PROJECTS</h2>
          <p>Click on project name to see preview</p>
        </div>
        <div className="Slide-container">
          <button
            className="slide-btn"
            id="prevpage"
            onClick={() => updatePage("prevpage")}
          >
            <img src={back} alt="back button" />
          </button>

          {
            <Card
              ref={props.ref}
              skills={skills[page]}
              setState={props.setState}
            ></Card>
          }

          <button
            className="slide-btn"
            id="nextpage"
            onClick={() => updatePage("nextpage")}
          >
            <img src={next} alt="next button" />
          </button>
        </div>
      </div>
    </>
  );
}
