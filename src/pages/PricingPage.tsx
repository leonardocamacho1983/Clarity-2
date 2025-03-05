import React from 'react';
import Layout from '../components/layout/Layout';
import Pricing from '../components/home/Pricing';
import CTA from '../components/home/CTA';

const PricingPage: React.FC = () => {
  return (
    <Layout>
      <div className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Planos e Preços</h1>
          <p className="text-secondary-text max-w-2xl mx-auto">
            Escolha o plano ideal para sua jornada de autoconhecimento e reflexão.
          </p>
        </div>
      </div>
      <Pricing />
      <div className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-secondary rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Perguntas Frequentes</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Como funciona o período de teste gratuito?</h3>
                <p className="text-secondary-text">
                  Você pode experimentar todos os recursos do plano Premium por 7 dias sem compromisso. Após esse período, você será cobrado apenas se decidir continuar.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Posso mudar de plano a qualquer momento?</h3>
                <p className="text-secondary-text">
                  Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As alterações entrarão em vigor imediatamente.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Como funciona o pagamento anual?</h3>
                <p className="text-secondary-text">
                  Com o pagamento anual, você economiza aproximadamente 20% em comparação com o pagamento mensal. O valor é cobrado uma vez por ano.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Posso cancelar minha assinatura?</h3>
                <p className="text-secondary-text">
                  Sim, você pode cancelar sua assinatura a qualquer momento. Após o cancelamento, você continuará tendo acesso aos recursos premium até o final do período pago.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Como são protegidos meus dados?</h3>
                <p className="text-secondary-text">
                  Seus dados são criptografados e armazenados com segurança. Seguimos todas as diretrizes da LGPD e você tem controle total sobre seus dados, podendo exportá-los ou excluí-los a qualquer momento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTA />
    </Layout>
  );
};

export default PricingPage;
