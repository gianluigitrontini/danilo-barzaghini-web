import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LangContext } from '../../context/LangContext';

import Icon from '../utils/Icon';

function Header() {
  const { state, dispatch } = useContext(LangContext);

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
        <div className='w-64'></div>
        <nav className='w-full'>
          <ul className='flex items-center justify-between gap-4 uppercase text-center'>
            {NAV.map((link) => (
              <li className='border-b-4 border-transparent hover:border-orange-500 py-4 text-white hover:text-orange-500'>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className='w-64 flex items-center justify-end gap-4'>
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
      </div>
    </header>
  );
}

export default Header;
