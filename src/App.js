import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './components/global/Header';
import Footer from './components/global/Footer';
import Homepage from './components/pages/homepage/Homepage.page';
function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
