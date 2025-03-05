import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-6 w-6 text-accent" />
              <span className="text-xl font-bold">Clarity Journal</span>
            </Link>
            <p className="text-secondary-text">
              Reflexão guiada com assistência de IA para autoconhecimento e crescimento pessoal.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-secondary-text hover:text-accent transition-colors">Início</Link></li>
              <li><Link to="/pricing" className="text-secondary-text hover:text-accent transition-colors">Planos</Link></li>
              <li><Link to="/about" className="text-secondary-text hover:text-accent transition-colors">Sobre</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-secondary-text hover:text-accent transition-colors">Termos de Uso</Link></li>
              <li><Link to="/privacy" className="text-secondary-text hover:text-accent transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/lgpd" className="text-secondary-text hover:text-accent transition-colors">LGPD</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p className="text-secondary-text mb-4">
              Dúvidas? Entre em contato conosco pelo email: <a href="mailto:contato@clarityjournal.com.br" className="text-accent hover:underline">contato@clarityjournal.com.br</a>
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-secondary-text hover:text-accent transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-secondary-text hover:text-accent transition-colors" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-secondary-text hover:text-accent transition-colors" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-secondary-text text-sm">
          <p>&copy; {currentYear} Clarity Journal. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
