import Particles from "react-tsparticles";
import particlesConfig from "./particlesConfig";

export default function ParticlesBg() {
  return (
    <>
      <Particles params={particlesConfig}> </Particles>
    </>
  );
}
