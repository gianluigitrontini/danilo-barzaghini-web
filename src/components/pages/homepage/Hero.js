import React from 'react';
import logo from '../../../assets/images/logo.png';
import scrollDown from '../../../assets/images/hero-scroll-down.png';

function Hero() {
  const ScrollDownIcon = () => {
    return (
      <img src={scrollDown} className='w-12 mb-12 justify-self-end' alt='' />
    );
  };
  const Logo = () => {
    return (
      <img
        src={logo}
        alt='Danilo Barzaghini Logo'
        className='max-w-[24rem] w-full mb-8'
      />
    );
  };
  return (
    <div className='hero-background'>
      <div className='container h-full'>
        <div className='h-full flex flex-col items-center justify-between text-white text-center'>
          <div className='h-[85px]'></div>
          <div className='flex flex-col justify-center items-center'>
            <Logo />
            <h3 className='my-6 text-xl'>
              Using a multidimensional approach, linguistic and subliminal
              techniques, I accompany you towards your desired goals, which
              develop from the depths, are realised on the surface and manifest
              themselves in new perceived states of being.
            </h3>
            <h3 className='my-6 text-xl'>
              Respect for the person, the quality of listening and the ability
              to intervene in a correct manner, distinguish the efficiency and
              quality of the work I do.
            </h3>
          </div>
          <ScrollDownIcon />
        </div>
      </div>
    </div>
  );
}

export default Hero;
