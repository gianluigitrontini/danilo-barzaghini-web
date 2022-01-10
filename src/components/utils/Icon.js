import languageItalian from '../../assets/images/language-italy.png';
import languageGerman from '../../assets/images/language-germany.png';
import languageEnglish from '../../assets/images/language-english.png';
const Icon = (props) => {
  return (
    <>
      {props.facebook && (
        <img
          src='https://img.icons8.com/material/24/ffffff/facebook-f.png'
          alt='Facebook Icon'
        />
      )}
      {props.twitter && (
        <img
          src='https://img.icons8.com/material/24/ffffff/twitter-squared.png'
          alt='Twitter Icon'
        />
      )}
      {props.google && (
        <img
          src='https://img.icons8.com/material-outlined/24/ffffff/google-plus.png'
          alt='Google+ Icon'
        />
      )}
      {props.phone && (
        <svg
          aria-hidden='true'
          role='img'
          width='1em'
          height='1em'
          preserveAspectRatio='xMidYMid meet'
          viewBox='0 0 32 32'>
          <path
            d='M24 13h-2a3.003 3.003 0 0 0-3-3V8a5.006 5.006 0 0 1 5 5z'
            fill='currentColor'
          />
          <path
            d='M28 13h-2a7.008 7.008 0 0 0-7-7V4a9.01 9.01 0 0 1 9 9z'
            fill='currentColor'
          />
          <path
            d='M20.333 21.482l2.24-2.24a2.167 2.167 0 0 1 2.337-.48l2.728 1.092A2.167 2.167 0 0 1 29 21.866v4.961a2.167 2.167 0 0 1-2.284 2.169C7.594 27.806 3.732 11.61 3.015 5.408A2.162 2.162 0 0 1 5.169 3h4.873a2.167 2.167 0 0 1 2.012 1.362l1.091 2.728a2.167 2.167 0 0 1-.48 2.337l-2.24 2.24s1.242 8.732 9.908 9.815z'
            fill='currentColor'
          />
        </svg>
      )}
      {props.skype && (
        <svg
          aria-hidden='true'
          role='img'
          width='1em'
          height='1em'
          preserveAspectRatio='xMidYMid meet'
          viewBox='0 0 1024 1024'>
          <path
            d='M883.7 578.6c4.1-22.5 6.3-45.5 6.3-68.5c0-51-10-100.5-29.7-147c-19-45-46.3-85.4-81-120.1a375.79 375.79 0 0 0-120.1-80.9c-46.6-19.7-96-29.7-147-29.7c-24 0-48.1 2.3-71.5 6.8A225.1 225.1 0 0 0 335.6 113c-59.7 0-115.9 23.3-158.1 65.5A222.25 222.25 0 0 0 112 336.6c0 38 9.8 75.4 28.1 108.4c-3.7 21.4-5.7 43.3-5.7 65.1c0 51 10 100.5 29.7 147c19 45 46.2 85.4 80.9 120.1c34.7 34.7 75.1 61.9 120.1 80.9c46.6 19.7 96 29.7 147 29.7c22.2 0 44.4-2 66.2-5.9c33.5 18.9 71.3 29 110 29c59.7 0 115.9-23.2 158.1-65.5c42.3-42.2 65.5-98.4 65.5-158.1c.1-38-9.7-75.5-28.2-108.7zm-370 162.9c-134.2 0-194.2-66-194.2-115.4c0-25.4 18.7-43.1 44.5-43.1c57.4 0 42.6 82.5 149.7 82.5c54.9 0 85.2-29.8 85.2-60.3c0-18.3-9-38.7-45.2-47.6l-119.4-29.8c-96.1-24.1-113.6-76.1-113.6-124.9c0-101.4 95.5-139.5 185.2-139.5c82.6 0 180 45.7 180 106.5c0 26.1-22.6 41.2-48.4 41.2c-49 0-40-67.8-138.7-67.8c-49 0-76.1 22.2-76.1 53.9s38.7 41.8 72.3 49.5l88.4 19.6c96.8 21.6 121.3 78.1 121.3 131.3c0 82.3-63.3 143.9-191 143.9z'
            fill='currentColor'
          />
        </svg>
      )}
      {props.mail && (
        <svg
          aria-hidden='true'
          role='img'
          width='1em'
          height='1em'
          preserveAspectRatio='xMidYMid meet'
          viewBox='0 0 16 16'>
          <g fill='currentColor'>
            <path d='M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414L.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z' />
          </g>
        </svg>
      )}
      {props.italian && (
        <img src={languageItalian} alt='Bandiera Italiana' className='w-6' />
      )}
      {props.german && (
        <img src={languageGerman} alt='Bandiera Tedesca' className='w-6' />
      )}
      {props.english && (
        <img src={languageEnglish} alt='Bandiera Inglese' className='w-6' />
      )}
      {props.hamburger && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      )}
    </>
  );
};

export default Icon;
