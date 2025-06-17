import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import './App.css';
import Main from './components/Main';
import FloatingMenu from './components/Floating';
import ScrollProgressBar from './components/Scroll';
import LatestSection from './components/Articles';
import MainContent from './components/About';
import ContactForm from './components/Contact';
import PrivacyPolicy from './components/Private';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col scroll-smooth bg-black  relative">
      <BrowserRouter>
        <ScrollProgressBar />
        {/* Background overlay when menu is open */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-all duration-300"></div>
        )}
        {/* Main content with optional blur */}
        <div className={`flex-1 flex flex-col flex-grow transition-all duration-300 ${isMenuOpen ? 'blur-sm' : ''}`}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/latest" element={<LatestSection />} />
            <Route path='/about' element={<MainContent />} />
            <Route path='/contact' element={<ContactForm />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
        <FloatingMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;