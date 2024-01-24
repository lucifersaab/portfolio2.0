import ProgressBar2 from "./ProgressBar2";
export default function SkillBar({ content, progress, bar }) {
  return (
    <div className={bar === 1 ? "skill-bars" : "skill-bars2"}>
      <div className="skillbar-content">
        <p>{content}</p>
        <ProgressBar2 progress={progress}></ProgressBar2>
      </div>
    </div>
  );
}
