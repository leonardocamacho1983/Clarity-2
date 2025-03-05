import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen } from 'lucide-react';
import Button from '../ui/Button';

interface NavbarProps {
  isAuthenticated?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-secondary py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <BookOpen className="h-6 w-6 text-accent" />
          <span className="text-xl font-bold">Clarity Journal</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="space-x-6">
            <Link 
              to="/" 
              className={`hover:text-accent transition-colors ${location.pathname === '/' ? 'text-accent' : ''}`}
            >
              Início
            </Link>
            <Link 
              to="/pricing" 
              className={`hover:text-accent transition-colors ${location.pathname === '/pricing' ? 'text-accent' : ''}`}
            >
              Planos
            </Link>
            <Link 
              to="/about" 
              className={`hover:text-accent transition-colors ${location.pathname === '/about' ? 'text-accent' : ''}`}
            >
              Sobre
            </Link>
          </div>

          <div className="space-x-3">
            {isAuthenticated ? (
              <Link to="/dashboard">
                <Button>Meu Diário</Button>
              </Link>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline">Entrar</Button>
                </Link>
                <Link to="/signup">
                  <Button>Cadastrar</Button>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary-text"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary border-t border-gray-700 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`py-2 hover:text-accent transition-colors ${location.pathname === '/' ? 'text-accent' : ''}`}
              onClick={toggleMenu}
            >
              Início
            </Link>
            <Link 
              to="/pricing" 
              className={`py-2 hover:text-accent transition-colors ${location.pathname === '/pricing' ? 'text-accent' : ''}`}
              onClick={toggleMenu}
            >
              Planos
            </Link>
            <Link 
              to="/about" 
              className={`py-2 hover:text-accent transition-colors ${location.pathname === '/about' ? 'text-accent' : ''}`}
              onClick={toggleMenu}
            >
              Sobre
            </Link>
            
            <div className="pt-4 border-t border-gray-700 flex flex-col space-y-3">
              {isAuthenticated ? (
                <Link to="/dashboard" onClick={toggleMenu}>
                  <Button className="w-full">Meu Diário</Button>
                </Link>
              ) : (
                <>
                  <Link to="/login" onClick={toggleMenu}>
                    <Button variant="outline" className="w-full">Entrar</Button>
                  </Link>
                  <Link to="/signup" onClick={toggleMenu}>
                    <Button className="w-full">Cadastrar</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
