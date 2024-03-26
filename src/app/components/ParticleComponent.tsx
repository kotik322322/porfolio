import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { type Container, type ISourceOptions } from '@tsparticles/engine';
import { loadFull } from 'tsparticles';
import lightConfig from '../data/lightConfig.json';

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(() => lightConfig, []);

  if (init) {
    return <div className='absolute top-0 right-0 bottom-0 left-0 z-0'><Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} /></div>;
  }

  return <></>;
};

export default ParticlesComponent;
