export default function ProgressBar({ progress }) {
  return (
    <>
      <div className="parent-bar">
        <div className="child-bar" style={{ width: progress }}>
          {progress}
        </div>
      </div>
    </>
  );
}
