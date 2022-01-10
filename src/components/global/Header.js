import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const NAV = [
    { path: '/', name: 'In-Depth Coaching' },
    { path: '/', name: 'Remote Viewing' },
    { path: '/', name: 'Deep Experience' },
    { path: '/', name: 'Book' },
    { path: '/', name: 'Podcast' },
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
        <div className='w-64 flex items-center justify-end'>IT / EN / DE</div>
      </div>
    </header>
  );
}

export default Header;
