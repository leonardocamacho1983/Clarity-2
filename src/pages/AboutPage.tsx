import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Shield, Brain, Heart } from 'lucide-react';
import CTA from '../components/home/CTA';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Sobre o Clarity Journal</h1>
              <p className="text-xl text-secondary-text">
                Nossa missão é ajudar as pessoas a desenvolverem autoconhecimento através da reflexão guiada.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-secondary rounded-lg p-8 mb-12">
                <h2 className="text-2xl font-bold mb-4">Nossa História</h2>
                <p className="text-secondary-text mb-4">
                  O Clarity Journal nasceu da percepção de que muitas pessoas desejam praticar a escrita reflexiva, mas muitas vezes não sabem por onde começar ou como extrair insights significativos de suas próprias palavras.
                </p>
                <p className="text-secondary-text mb-4">
                  Fundado em 2023 por uma equipe de psicólogos, desenvolvedores e entusiastas de IA, nosso objetivo é democratizar o acesso a ferramentas de autoconhecimento que antes estavam disponíveis apenas em contextos terapêuticos.
                </p>
                <p className="text-secondary-text">
                  Acreditamos que a reflexão guiada, apoiada por tecnologia responsável, pode ser um catalisador poderoso para o crescimento pessoal e bem-estar emocional.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-secondary p-6 rounded-lg text-center">
                  <div className="flex justify-center mb-4">
                    <Brain className="h-12 w-12 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Inteligência</h3>
                  <p className="text-secondary-text">
                    Utilizamos IA avançada para oferecer insights personalizados que respeitam a individualidade de cada usuário.
                  </p>
                </div>
                
                <div className="bg-secondary p-6 rounded-lg text-center">
                  <div className="flex justify-center mb-4">
                    <Shield className="h-12 w-12 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Privacidade</h3>
                  <p className="text-secondary-text">
                    Seu diário é pessoal. Garantimos a segurança e privacidade de seus dados com criptografia avançada.
                  </p>
                </div>
                
                <div className="bg-secondary p-6 rounded-lg text-center">
                  <div className="flex justify-center mb-4">
                    <Heart className="h-12 w-12 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Empatia</h3>
                  <p className="text-secondary-text">
                    Desenvolvemos nossa plataforma com empatia, entendendo que cada jornada de autoconhecimento é única.
                  </p>
                </div>
              </div>
              
              <div className="bg-secondary rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Nossa Abordagem à IA</h2>
                <p className="text-secondary-text mb-4">
                  No Clarity Journal, acreditamos que a IA deve ser uma ferramenta de apoio, não um substituto para o julgamento humano. Nossa tecnologia é projetada para:
                </p>
                <ul className="list-disc pl-6 mb-4 text-secondary-text space-y-2">
                  <li>Identificar padrões em suas reflexões que podem passar despercebidos</li>
                  <li>Sugerir perguntas que incentivam um pensamento mais profundo</li>
                  <li>Oferecer perspectivas alternativas para considerar</li>
                  <li>Respeitar limites éticos claros, nunca fazendo diagnósticos médicos</li>
                </ul>
                <p className="text-secondary-text">
                  Todos os insights gerados por IA passam por moderação para garantir que sejam úteis, respeitosos e seguros. Você sempre mantém o controle sobre como e quando deseja utilizar esses insights.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <CTA />
    </Layout>
  );
};

export default AboutPage;
