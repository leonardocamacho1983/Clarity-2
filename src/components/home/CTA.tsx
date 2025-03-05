import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { Sparkles } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center p-2 bg-accent bg-opacity-20 rounded-full mb-6">
            <Sparkles className="h-5 w-5 text-accent mr-2" />
            <span className="text-accent font-medium">Comece sua jornada de autoconhecimento</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transforme reflexões em insights poderosos com o Clarity Journal
          </h2>
          
          <p className="text-secondary-text text-lg mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que estão descobrindo mais sobre si mesmas através da escrita guiada por IA. Experimente gratuitamente por 7 dias.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/signup">
              <Button size="lg">
                Começar Agora
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" size="lg">
                Ver Planos
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
