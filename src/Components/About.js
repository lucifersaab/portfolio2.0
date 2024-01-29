import tweety from "./../Media/tweety_gif.gif";
export default function About({ section1Ref }) {
  const intro =
    " I'm a Computer Science major at COMSATS University Lahore, passionate about both front-end design and curious about data science. My journey into web development began last summer with React, and I've been hooked ever since. During an internship last year, I found joy in creating user-friendly interfaces. Now, I'm excited to explore the world of Data Science, aiming to combine creativity with data analysis. My goal is to work in roles that allow me to craft engaging user experiences while diving into data insights.";
  return (
    <>
      <div ref={section1Ref}></div>
      <div className="centered-div">
        <h2>ABOUT</h2>
      </div>
      <div className="main-div">
        <div className="about-container">
          <div className="left-div">
            <img className="tweety-gif" src={tweety} alt="programming" />
          </div>
          <div className="right-text-div">
            {intro}
            <p>{"<-- Me working with react"} </p>
          </div>
        </div>
      </div>
    </>
  );
}
