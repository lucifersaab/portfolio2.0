import Spline from "@splinetool/react-spline";
export const SplineElement = ({ splineLoadSetter }) => {
  return (
    <>
      <Spline
        onLoad={() => {
          setTimeout(() => {
            splineLoadSetter(true);
          }, 2000);
        }}
        scene="https://prod.spline.design/1hn6pUDV5jbdLWDC/scene.splinecode"
      />
    </>
  );
};
