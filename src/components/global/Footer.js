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
        className='order-1 lg:order-0 max-w-[24rem] w-full mb-16 lg:mb-0 mt-16 mx-auto lg:ml-0 lg:mr-auto object-contain my-auto'
      />
    );
  };

  const ContactBlock = () => {
    return (
      <div className='order-0 lg:order-1 footer-contact-background lg:w-[350px] mx-auto lg:mr-0 lg:ml-auto mt-16 lg:-mt-[5rem] relative'>
        <h3 className='absolute right-[.75rem] font-bold text-xl pr-4 -top-[1rem] border-r-2 border-orange-500 text-white lg:text-black'>
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
        <div className='flex flex-col lg:flex-row justify-between w-full'>
          <Logo />
          <ContactBlock />
        </div>
        <div className=' flex flex-col lg:flex-row gap-4 lg:gap-0 text-center lg:text-left items-center justify-between text-white w-full text-sm'>
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
          <div className='flex items-center justify-center lg:justify-end gap-4 w-64'>
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
