// import ConfigDark from "../config/particlesjs-config.json";
import ConfigLight from "../data/lightConfig.json";

// import Particles from "react-particles-js"
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";




const ParticlesComponent = () => {
// This is new implementation where I have used react-tsparticles instead of react-particles-js
  const particlesInit = async (main:any) => {
    await loadFull(main);
  };


  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 z-0">
      <Particles
        id="tsparticles"
        style={{ position: "absolute", top: 0 }}
        params={ConfigLight}
        init={particlesInit} 
      />
    </div>
  );
};

export default ParticlesComponent;