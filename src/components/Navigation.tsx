import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1a2847] border-b border-[#2d4461]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link to="/" className="flex items-center gap-3 sm:gap-4" onClick={() => setIsMenuOpen(false)}>
            <img
              src="/4211aacc-bfba-443a-89dd-d3676d5e55ec.jpg"
              alt="Justiora Foundation"
              className="h-16 w-16 sm:h-24 sm:w-24 rounded-full object-cover"
            />
            <div>
              <h1 className="text-[#d4a574] text-lg sm:text-2xl font-bold tracking-wider" style={{ fontFamily: 'Cinzel, serif' }}>JUSTIORA FOUNDATION</h1>
              <p className="text-[#d4a574] text-xs sm:text-sm font-light tracking-wide">Justice • Truth • Environmental Law</p>
            </div>
          </Link>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className="hidden lg:flex items-center gap-7 text-sm">
            <Link
              to="/"
              className={`${location.pathname === '/' ? 'text-[#d4a574] border-b-2 border-[#d4a574] pb-1 font-medium' : 'text-white font-light'} hover:text-[#d4a574] transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${location.pathname === '/about' ? 'text-[#d4a574] border-b-2 border-[#d4a574] pb-1 font-medium' : 'text-white font-light'} hover:text-[#d4a574] transition-colors`}
            >
              About
            </Link>
            <Link
              to="/environmental-justice"
              className={`${location.pathname === '/environmental-justice' ? 'text-[#d4a574] border-b-2 border-[#d4a574] pb-1 font-medium' : 'text-white font-light'} hover:text-[#d4a574] transition-colors`}
            >
              Environmental Justice
            </Link>
            <Link
              to="/legal-awareness"
              className={`${location.pathname === '/legal-awareness' ? 'text-[#d4a574] border-b-2 border-[#d4a574] pb-1 font-medium' : 'text-white font-light'} hover:text-[#d4a574] transition-colors`}
            >
              Legal Awareness & RTI
            </Link>
            <a href="/#complaint-form" className="text-white hover:text-[#d4a574] transition-colors font-light">Citizen Complaints</a>
            <Link
              to="/transparency"
              className={`${location.pathname === '/transparency' ? 'text-[#d4a574] border-b-2 border-[#d4a574] pb-1 font-medium' : 'text-white font-light'} hover:text-[#d4a574] transition-colors`}
            >
              Transparency
            </Link>
            <Link
              to="/contact"
              className={`${location.pathname === '/contact' ? 'text-[#d4a574] border-b-2 border-[#d4a574] pb-1 font-medium' : 'text-white font-light'} hover:text-[#d4a574] transition-colors`}
            >
              Contact
            </Link>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#2d4461]">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className={`${location.pathname === '/' ? 'text-[#d4a574] font-medium' : 'text-white font-light'} hover:text-[#d4a574] transition-colors py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`${location.pathname === '/about' ? 'text-[#d4a574] font-medium' : 'text-white font-light'} hover:text-[#d4a574] transition-colors py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/environmental-justice"
                className={`${location.pathname === '/environmental-justice' ? 'text-[#d4a574] font-medium' : 'text-white font-light'} hover:text-[#d4a574] transition-colors py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                Environmental Justice
              </Link>
              <Link
                to="/legal-awareness"
                className={`${location.pathname === '/legal-awareness' ? 'text-[#d4a574] font-medium' : 'text-white font-light'} hover:text-[#d4a574] transition-colors py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                Legal Awareness & RTI
              </Link>
              <a
                href="/#complaint-form"
                className="text-white hover:text-[#d4a574] transition-colors font-light py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Citizen Complaints
              </a>
              <Link
                to="/transparency"
                className={`${location.pathname === '/transparency' ? 'text-[#d4a574] font-medium' : 'text-white font-light'} hover:text-[#d4a574] transition-colors py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                Transparency
              </Link>
              <Link
                to="/contact"
                className={`${location.pathname === '/contact' ? 'text-[#d4a574] font-medium' : 'text-white font-light'} hover:text-[#d4a574] transition-colors py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
