import Header from "./Header";
import gif1 from "./../Media/coding_gif.gif";
export default function Intro() {
  return (
    <>
      <div className="heading-cont">
        <Header
          display={"Welcome to my portfolio!"}
          delay={100}
          repeat={true}
        ></Header>
      </div>
      <div className="main-div">
        <div className="intro-container">
          <div className="left-text-div" style={{ width: "700px" }}>
            <Header
              display="Hello world! I am Ahmad Hashim Farooq, a passionate web developer with a knack for turning ideas into beautiful, functional websites. With experience in front-end and back-end development, I bring creativity and technical expertise to every project."
              delay={15}
              repeat={false}
            ></Header>
          </div>

          <div className="right-div">
            <img className="gif-img" src={gif1} alt="me" />
          </div>
        </div>
      </div>
    </>
  );
}
