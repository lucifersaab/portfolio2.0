import { lazy, Suspense } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));

export default function Scene() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="https://prod.spline.design/1hn6pUDV5jbdLWDC/scene.splinecode" />
      </Suspense>
    </div>
  );
}
