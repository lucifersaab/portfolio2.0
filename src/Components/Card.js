import ProgressBar from "./ProgressBar";
import "./../CSS/App.css";

export default function Card({ ref, skills, setState }) {
  const dropdown = (project) => {
    setState(project);
  };
  return (
    <>
      <div ref={ref} className="skill-card">
        <div className="main-container">
          <div className="left-col">
            <img src={skills.img} alt="logo" />
            <p>{skills.name}</p>
            <ProgressBar progress={skills.progress}></ProgressBar>
          </div>
          <div className="right-col" style={{ paddingTop: 0 }}>
            <p>{skills.desc}</p>
            <div>
              {skills.projects.length === 0 ? (
                <div></div>
              ) : (
                <div>
                  <h2>PROJECTS</h2>
                  <div>
                    {skills.projects.map((project) => {
                      return (
                        <div
                          id={project}
                          className="projects"
                          onClick={() => dropdown(project)}
                        >
                          {project}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
