import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Sparkles, Clock, Search, Download } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="h-8 w-8 text-accent" />,
    title: 'Reflexão Guiada por IA',
    description: 'Nossa IA analisa suas entradas e oferece perguntas reflexivas para aprofundar seu autoconhecimento.'
  },
  {
    icon: <Shield className="h-8 w-8 text-accent" />,
    title: 'Privacidade Garantida',
    description: 'Seus dados são criptografados e protegidos. Você tem controle total sobre suas informações.'
  },
  {
    icon: <Brain className="h-8 w-8 text-accent" />,
    title: 'Insights Personalizados',
    description: 'Receba análises personalizadas baseadas em seus padrões de pensamento e emoções.'
  },
  {
    icon: <Clock className="h-8 w-8 text-accent" />,
    title: 'Salvamento Automático',
    description: 'Nunca perca uma reflexão importante com nosso sistema de salvamento automático.'
  },
  {
    icon: <Search className="h-8 w-8 text-accent" />,
    title: 'Busca Inteligente',
    description: 'Encontre facilmente entradas passadas com nossa busca avançada por palavras-chave e datas.'
  },
  {
    icon: <Download className="h-8 w-8 text-accent" />,
    title: 'Exportação de Dados',
    description: 'Exporte seus dados a qualquer momento em formato JSON para backup ou análise pessoal.'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Recursos Poderosos</h2>
          <p className="text-secondary-text max-w-2xl mx-auto">
            O Clarity Journal combina tecnologia avançada com práticas de reflexão para oferecer uma experiência de journaling única.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-secondary p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-secondary-text">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
