export default function ProgressBar2({ progress }) {
  return (
    <>
      <div className="parent-bar2">
        <div className={progress >= 20 ? "child-bar2-lightup" : "child-bar2"}>
          {" "}
        </div>
        <div className={progress >= 40 ? "child-bar2-lightup" : "child-bar2"}>
          {" "}
        </div>
        <div className={progress >= 60 ? "child-bar2-lightup" : "child-bar2"}>
          {" "}
        </div>
        <div className={progress >= 80 ? "child-bar2-lightup" : "child-bar2"}>
          {" "}
        </div>
        <div className={progress >= 100 ? "child-bar2-lightup" : "child-bar2"}>
          {" "}
        </div>
      </div>
    </>
  );
}
