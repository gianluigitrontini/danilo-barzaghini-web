import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/global/Header';
import Footer from './components/global/Footer';
import Homepage from './components/pages/homepage/Homepage.page';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/'>
          <Homepage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
