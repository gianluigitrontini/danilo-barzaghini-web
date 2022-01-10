import React, { useContext } from 'react';
import logo from '../../../assets/images/logo.png';
import scrollDown from '../../../assets/images/hero-scroll-down.png';
import { LangContext } from '../../../context/LangContext';
import { content } from '../../../data/content';

function Hero() {
  const { state } = useContext(LangContext);

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
            <h3 className='my-6 text-lg lg:text-xl'>
              {state.language === 'en'
                ? content.homepage.en.hero.main
                : state.language === 'de'
                ? content.homepage.de.hero.main
                : content.homepage.it.hero.main}
            </h3>
            <h3 className='my-6 text-lg lg:text-xl'>
              {state.language === 'en'
                ? content.homepage.en.hero.secondary
                : state.language === 'de'
                ? content.homepage.de.hero.secondary
                : content.homepage.it.hero.secondary}
            </h3>
          </div>
          <ScrollDownIcon />
        </div>
      </div>
    </div>
  );
}

export default Hero;
