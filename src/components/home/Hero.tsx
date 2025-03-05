import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { BookOpen, Brain, Shield, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Clareza começa com <span className="text-accent">reflexão guiada</span>.
            </h1>
            <p className="text-lg text-secondary-text mb-8 max-w-lg">
              Descubra insights profundos sobre você mesmo com nosso diário inteligente que utiliza IA para guiar sua jornada de autoconhecimento.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Link to="/signup">
                <Button size="lg">
                  Experimente gratuitamente por 7 dias
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg">
                  Saiba mais
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -top-4 -left-4 w-full h-full bg-accent rounded-lg"></div>
              <div className="relative bg-secondary rounded-lg shadow-xl p-6 z-10">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-6 w-6 text-accent mr-2" />
                  <h3 className="text-lg font-semibold">Meu Diário</h3>
                </div>
                <div className="mb-4">
                  <p className="text-secondary-text mb-2 text-sm">Quinta-feira, 10 de Agosto</p>
                  <p className="mb-4">
                    Hoje foi um dia produtivo. Consegui finalizar o projeto que estava pendente há semanas. Sinto-me realizado, mas também exausto...
                  </p>
                </div>
                <div className="bg-primary p-4 rounded-md border border-accent">
                  <div className="flex items-center mb-2">
                    <Sparkles className="h-4 w-4 text-accent mr-2" />
                    <p className="text-sm font-medium text-accent">Insight da IA</p>
                  </div>
                  <p className="text-sm text-secondary-text">
                    Você parece estar equilibrando realização e cansaço. Considere refletir sobre como manter esse equilíbrio de forma sustentável.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
