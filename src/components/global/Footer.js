import React, { useContext } from 'react';
import logo from '../../assets/images/logo.png';
import Icon from '../utils/Icon';
import { content } from '../../data/content';
import { LangContext } from '../../context/LangContext';

function Footer() {
  const { state } = useContext(LangContext);

  const Logo = () => {
    return (
      <img
        src={logo}
        alt='Danilo Barzaghini Logo'
        className='max-w-[24rem] w-full mt-16 mr-auto object-contain my-auto'
      />
    );
  };

  const ContactBlock = () => {
    return (
      <div className='footer-contact-background w-[350px] ml-auto -mt-[5rem] relative'>
        <h3 className='absolute right-[.75rem] font-bold text-xl pr-4 -top-[1rem] border-r-2 border-orange-500'>
          {state.language === 'en'
            ? content.homepage.en.contact.title
            : state.language === 'de'
            ? content.homepage.de.contact.title
            : content.homepage.it.contact.title}
        </h3>
        <span>
          {state.language === 'en'
            ? content.homepage.en.contact.text
            : state.language === 'de'
            ? content.homepage.de.contact.text
            : content.homepage.it.contact.text}
        </span>

        <span className='flex items-center gap-2 my-4 text-xl'>
          <Icon phone /> +41 (0)79 222 333 7
        </span>
        <span className='flex items-center gap-2 my-4 text-xl'>
          <Icon mail /> booking@sublimina.li
        </span>
        <span className='flex items-center gap-2 my-4 text-xl'>
          <Icon skype /> danilo.barzaghini
        </span>
      </div>
    );
  };
  return (
    <footer className='footer-background py-4 flex'>
      <div className='container flex flex-col justify-between items-center'>
        <div className='flex justify-between w-full'>
          <Logo />
          <ContactBlock />
        </div>
        <div className='flex items-center justify-between text-white w-full text-sm'>
          <span className='inline-block w-64'>
            Design by AskCreatives <br /> Development by{' '}
            <a
              href='https://gianluigitrontini.github.io/'
              target='_blank'
              rel='noreferrer'>
              Gianluigi Trontini
            </a>
          </span>
          <span className='inline-block'>
            Privacy Policy | 2022 © Danilo Barzaghini
          </span>
          <div className='flex items-center justify-end gap-4 w-64'>
            <a href='https://facebook.com' target='_blank' rel='noreferrer'>
              <Icon facebook />
            </a>
            <a href='https://twitter.com' target='_blank' rel='noreferrer'>
              <Icon twitter />
            </a>
            <a href='https://google.com' target='_blank' rel='noreferrer'>
              <Icon google />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
