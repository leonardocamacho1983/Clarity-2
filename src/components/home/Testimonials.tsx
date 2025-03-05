import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana Silva',
    role: 'Psicóloga',
    content: 'O Clarity Journal tem sido uma ferramenta incrível para meus pacientes. Os insights da IA ajudam a identificar padrões que muitas vezes passam despercebidos.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80'
  },
  {
    name: 'Carlos Mendes',
    role: 'Empresário',
    content: 'Uso o diário diariamente para organizar meus pensamentos. A interface é intuitiva e os insights me ajudam a tomar decisões mais conscientes.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80'
  },
  {
    name: 'Juliana Costa',
    role: 'Estudante',
    content: 'Como estudante, o Clarity Journal me ajuda a processar informações e gerenciar o estresse. A versão gratuita já é ótima, mas o plano premium vale cada centavo.',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">O Que Nossos Usuários Dizem</h2>
          <p className="text-secondary-text max-w-2xl mx-auto">
            Descubra como o Clarity Journal está transformando a maneira como as pessoas refletem e crescem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-secondary p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? 'text-accent fill-accent' : 'text-gray-400'
                    }`}
                  />
                ))}
              </div>
              <p className="mb-6 text-secondary-text">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-secondary-text text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
