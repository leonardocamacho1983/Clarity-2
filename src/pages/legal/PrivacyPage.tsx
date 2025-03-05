import React from 'react';
import Layout from '../../components/layout/Layout';

const PrivacyPage: React.FC = () => {
  return (
    <Layout>
      <div className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Política de Privacidade</h1>
            
            <div className="bg-secondary rounded-lg p-8">
              <p className="mb-6">
                Última atualização: 15 de Agosto de 2023
              </p>
              
              <h2 className="text-xl font-semibold mb-4">1. Introdução</h2>
              <p className="mb-6">
                A Clarity Journal ("nós", "nosso" ou "empresa") está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você utiliza nosso serviço de journaling com assistência de IA.
              </p>
              
              <h2 className="text-xl font-semibold mb-4">2. Informações que Coletamos</h2>
              <p className="mb-4">
                Coletamos os seguintes tipos de informações:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Informações de Conta:</strong> Nome, endereço de e-mail, senha e informações de pagamento.
                </li>
                <li>
                  <strong>Conteúdo do Diário:</strong> Entradas que você escreve em seu diário.
                </li>
                <li>
                  <strong>Dados de Uso:</strong> Informações sobre como você interage com nosso serviço.
                </li>
                <li>
                  <strong>Informações do Dispositivo:</strong> Tipo de dispositivo, sistema operacional e navegador.
                </li>
              </ul>
              
              <h2 className="text-xl font-semibold mb-4">3. Como Usamos Suas Informações</h2>
              <p className="mb-4">
                Utilizamos suas informações para:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Fornecer, manter e melhorar nossos serviços.</li>
                <li>Processar transações e enviar notificações relacionadas.</li>
                <li>Gerar insights personalizados através de nossa tecnologia de IA.</li>
                <li>Responder a suas solicitações e fornecer suporte ao cliente.</li>
                <li>Enviar informações sobre novos recursos, atualizações e eventos promocionais (com seu consentimento).</li>
              </ul>
              
              <h2 className="text-xl font-semibold mb-4">4. Compartilhamento de Informações</h2>
              <p className="mb-4">
                Não vendemos suas informações pessoais. Podemos compartilhar informações nas seguintes circunstâncias:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Com prestadores de serviços que nos ajudam a operar nosso negócio.</li>
                <li>Para cumprir obrigações legais.</li>
                <li>Com seu consentimento explícito.</li>
              </ul>
              
              <h2 className="text-xl font-semibold mb-4">5. Segurança de Dados</h2>
              <p className="mb-6">
                Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações, incluindo criptografia AES-256 para entradas de diário e autenticação segura.
              </p>
              
              <h2 className="text-xl font-semibold mb-4">6. Seus Direitos (LGPD)</h2>
              <p className="mb-4">
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Direito de acesso aos seus dados pessoais.</li>
                <li>Direito de correção de dados incompletos, inexatos ou desatualizados.</li>
                <li>Direito de exclusão dos dados.</li>
                <li>Direito de portabilidade dos dados.</li>
                <li>Direito de informação sobre compartilhamento de dados.</li>
                <li>Direito de revogar o consentimento.</li>
              </ul>
              
              <h2 className="text-xl font-semibold mb-4">7. Retenção de Dados</h2>
              <p className="mb-6">
                Mantemos suas informações pelo tempo necessário para fornecer nossos serviços ou conforme exigido por lei. Quando você exclui sua conta, todas as suas entradas de diário e dados pessoais são permanentemente removidos de nossos sistemas.
              </p>
              
              <h2 className="text-xl font-semibold mb-4">8. Alterações nesta Política</h2>
              <p className="mb-6">
                Podemos atualizar esta política periodicamente. Notificaremos você sobre alterações significativas publicando a nova política em nosso site e/ou enviando um e-mail.
              </p>
              
              <h2 className="text-xl font-semibold mb-4">9. Contato</h2>
              <p className="mb-6">
                Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco pelo e-mail: <a href="mailto:privacidade@clarityjournal.com.br" className="text-accent hover:underline">privacidade@clarityjournal.com.br</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPage;
