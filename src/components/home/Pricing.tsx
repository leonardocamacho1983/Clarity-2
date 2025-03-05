import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { Plan } from '../../types';

const plans: Plan[] = [
  {
    id: 'free',
    name: 'Gratuito',
    price: {
      monthly: 0,
      yearly: 0
    },
    features: [
      'Até 5 entradas por mês',
      'Insights básicos de IA',
      'Exportação de dados',
      'Acesso via web'
    ]
  },
  {
    id: 'basic',
    name: 'Básico',
    price: {
      monthly: 39.90,
      yearly: 399
    },
    features: [
      'Entradas ilimitadas',
      'Insights avançados de IA',
      'Exportação de dados',
      'Acesso via web e mobile',
      'Busca avançada',
      'Suporte por email'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    price: {
      monthly: 79.90,
      yearly: 799
    },
    features: [
      'Tudo do plano Básico',
      'Insights personalizados aprofundados',
      'Temas personalizados',
      'Backup automático',
      'Suporte prioritário',
      'Acesso antecipado a novos recursos'
    ],
    recommended: true
  }
];

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const toggleBillingCycle = () => {
    setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly');
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Planos Simples e Transparentes</h2>
          <p className="text-secondary-text max-w-2xl mx-auto mb-8">
            Escolha o plano que melhor se adapta às suas necessidades de reflexão e autoconhecimento.
          </p>
          
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-3 ${billingCycle === 'monthly' ? 'text-primary-text' : 'text-secondary-text'}`}>
              Mensal
            </span>
            <button
              onClick={toggleBillingCycle}
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-accent"
              aria-pressed={billingCycle === 'yearly'}
            >
              <span className="sr-only">Alternar ciclo de cobrança</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  billingCycle === 'yearly' ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 ${billingCycle === 'yearly' ? 'text-primary-text' : 'text-secondary-text'}`}>
              Anual <span className="text-cta text-sm">(Economize 20%)</span>
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex"
            >
              <Card 
                className={`flex flex-col w-full ${
                  plan.recommended ? 'border-2 border-accent relative' : ''
                }`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent text-primary px-4 py-1 rounded-full text-sm font-medium">
                    Recomendado
                  </div>
                )}
                
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold">
                      {formatPrice(plan.price[billingCycle])}
                    </span>
                    <span className="text-secondary-text">
                      {billingCycle === 'monthly' ? '/mês' : '/ano'}
                    </span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-cta mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6 pt-0 mt-auto">
                  <Link to="/signup">
                    <Button
                      variant={plan.recommended ? 'primary' : 'outline'}
                      className="w-full"
                    >
                      {plan.id === 'free' ? 'Começar Agora' : 'Teste Grátis por 7 Dias'}
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
