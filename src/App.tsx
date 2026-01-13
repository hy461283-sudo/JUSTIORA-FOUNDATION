import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import EnvironmentalJustice from './pages/EnvironmentalJustice';
import LegalAwareness from './pages/LegalAwareness';
import Transparency from './pages/Transparency';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/environmental-justice" element={<EnvironmentalJustice />} />
          <Route path="/legal-awareness" element={<LegalAwareness />} />
          <Route path="/transparency" element={<Transparency />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
