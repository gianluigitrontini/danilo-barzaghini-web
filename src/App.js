import { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/global/Header';
import Footer from './components/global/Footer';
import Homepage from './components/pages/homepage/Homepage.page';
import { LangContext } from './context/LangContext';

function App() {
  const { dispatch } = useContext(LangContext);

  useEffect(() => {
    return window.location.pathname.substring(1, 3) === 'en'
      ? dispatch({ type: 'SET_LANG', payload: 'en' })
      : window.location.pathname.substring(1, 3) === 'de'
      ? dispatch({ type: 'SET_LANG', payload: 'de' })
      : dispatch({ type: 'SET_LANG', payload: 'it' });
  }, []);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* <BrowserRouter> */}
      <Header />
      <Routes>
        {/* Non-localized routes */}
        <Route path='/' element={<Homepage />} />
        {/* Localized routes */}
        <Route path={'/:lang'} element={<Homepage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
