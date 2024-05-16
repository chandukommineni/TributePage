import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import OptionsSection from './components/OptionsSection';
import Home from './pages/Home';
import Footer from './components/Footer';
import './styles.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Awards from './pages/Awards';
import Life from './pages/Life';
import Services from './pages/Services';
import Tributes from './pages/Tributes';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <HeroSection />
        <OptionsSection />
        
        <Routes>
        
          <Route  path='/'  exact element={<Home/>}></Route>
          <Route  path="/Awards" exact element={<Awards/>}></Route>
          <Route  path="/Life" exact element={<Life/>}></Route>
          <Route  path="/Services" exact element={<Services/>}></Route>
          <Route  path="/Tributes" exact element={<Tributes/>}></Route>
        

        </Routes>
        <Footer />

      </BrowserRouter>


    </div>
  );
}

export default App;
