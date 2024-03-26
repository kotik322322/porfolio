import { useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { type Container, type ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import lightConfig from '../data/lightConfig.json';

const ParticlesComponent = () => {

  initParticlesEngine(async (engine) => {
    await loadSlim(engine);
  })
  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

//   const options: ISourceOptions = useMemo(() => lightConfig, []);

  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 z-0">
      <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={lightConfig} />
    </div>
  );
};

export default ParticlesComponent;
