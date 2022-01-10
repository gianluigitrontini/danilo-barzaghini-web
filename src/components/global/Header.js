import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { LangContext } from '../../context/LangContext';

import Icon from '../utils/Icon';

function Header() {
  const { state, dispatch } = useContext(LangContext);

  const [isHamburgerToggled, setIsHamburgerToggled] = useState(false);

  const NAV = [
    {
      path: state.language !== 'it' ? `${state.language}/` : '/',
      name: 'In-Depth Coaching',
    },
    {
      path: state.language !== 'it' ? `${state.language}/` : '/',
      name: 'Remote Viewing',
    },
    {
      path: state.language !== 'it' ? `${state.language}/` : '/',
      name: 'Deep Experience',
    },
    {
      path: state.language !== 'it' ? `${state.language}/` : '/',
      name: 'Book',
    },
    {
      path: state.language !== 'it' ? `${state.language}/` : '/',
      name: 'Podcast',
    },
  ];
  return (
    <header className='h-[85px] flex items-center z-10'>
      <div className='container flex items-center justify-between'>
        <div className='hidden lg:block w-64'>
          {/* Empty Spacing for Alignment */}
        </div>
        {/* Desktop Nav */}
        <nav className='w-full hidden lg:block'>
          <ul className='flex items-center justify-between gap-4 uppercase text-center'>
            {NAV.map((link, i) => (
              <li
                key={i}
                className='border-b-4 border-transparent hover:border-orange-500 py-4 text-white hover:text-orange-500'>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* Language Selector */}
        <div className='lg:w-64 flex items-center justify-end gap-4'>
          <Link
            to='/'
            onClick={() => dispatch({ type: 'SET_LANG', payload: 'it' })}>
            <Icon italian />
          </Link>
          <Link
            to='/en'
            onClick={() => dispatch({ type: 'SET_LANG', payload: 'en' })}>
            <Icon english />
          </Link>
          <Link
            to='/de'
            onClick={() => dispatch({ type: 'SET_LANG', payload: 'de' })}>
            <Icon german />
          </Link>
        </div>
        <div
          className='text-white lg:hidden'
          onClick={() => setIsHamburgerToggled(true)}>
          <Icon hamburger />
        </div>
        {/* Mobile Nav */}
        <nav
          id='mobile_navigation'
          className={`${
            isHamburgerToggled ? 'block' : 'hidden'
          } bg-gray-900 fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center lg:hidden text-xl`}>
          <ul className='flex flex-col justify-center items-center gap-4'>
            {NAV.map((link, i) => (
              <li
                key={i}
                className='border-b-4 border-transparent hover:border-orange-500 py-4 text-white hover:text-orange-500'>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
            <button
              className='mt-12 border-2 border-white py-3 px-6 text-white'
              onClick={() => setIsHamburgerToggled(false)}>
              Close
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
