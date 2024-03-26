import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { type Container, type ISourceOptions, MoveDirection, OutMode } from '@tsparticles/engine';
import { loadFull } from 'tsparticles';
import lightConfig from '../data/defaultConfig.json';
import darkConfig from "../data/darkConfig.json"


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

  const options: ISourceOptions = useMemo(() => (lightConfig), []);

  if (init) {
    return <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />;
  }

  return <></>;
};


export default ParticlesComponent

//   строка 186 отвечает за кружки
//   строка 461 отвечает за Линии соединения