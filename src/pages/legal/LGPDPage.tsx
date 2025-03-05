import React from 'react';
import Layout from '../../components/layout/Layout';

const LGPDPage: React.FC = () => {
  return (
    <Layout>
      <div className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Conformidade com a LGPD</h1>
            
            <div className="bg-secondary rounded-lg p-8">
              <p className="mb-6">
                O Clarity Journal está comprometido em proteger seus dados pessoais de acordo com a Lei Geral de Proteção de Dados (LGPD) - Lei nº 13.709/2018.
              </p>
              
              <h2 className="text-xl font-semibold mb-4">Seus Direitos sob a LGPD</h2>
              <p className="mb-4">
                Como titular de dados pessoais, você tem os seguintes direitos:
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="bg-primary p-4 rounded-md">
                  <h3 className="font-semibold mb-2">Direito de Acesso</h3>
                  <p className="text-secondary-text">
                    Você pode solicitar uma cópia de todos os dados pessoais que mantemos sobre você. Forneceremos essas informações em formato JSON.
                  </p>
                </div>
                
                <div className="bg-primary p-4 rounded-md">
                  <h3 className="font-semibold mb-2">Direito de Correção</h3>
                  <p className="text-secondary-text">
                    Você pode solicitar a correção de dados incompletos, inexatos ou desatualizados sobre você.
                  </p>
                </div>
                
                <div className="bg-primary p-4 rounded-md">
                  <h3 className="font-semibold mb-2">Direito de Exclusão</h3>
                  <p className="text-secondary-text">
                    Você pode solicitar a exclusão de seus dados pessoais. Excluiremos todos os seus dados, incluindo entradas de diário e configurações.
                  </p>
                </div>
                
                <div className="bg-primary p-4 rounded-md">
                  <h3 className="font-semibold mb-2">Direito de Portabilidade</h3>
                  <p className="text-secondary-text">
                    Você pode solicitar a transferência de seus dados para outro serviço ou fornecedor em formato estruturado.
                  </p>
                </div>
                
                <div className="bg-primary p-4 rounded-md">
                  <h3 className="font-semibold mb-2">Direito de Informação</h3>
                  <p className="text-secondary-text">
                    Você pode solicitar informações sobre como seus dados são compartilhados e com quais entidades.
                  </p>
                </div>
                
                <div className="bg-primary p-4 rounded-md">
                  <h3 className="font-semibold mb-2">Direito de Revogação do Consentimento</h3>
                  <p className="text-secondary-text">
                    Você pode revogar seu consentimento para o processamento de seus dados a qualquer momento.
                  </p>
                </div>
              </div>
              
              <h2 className="text-xl font-semibold mb-4">Como Exercer Seus Direitos</h2>
              <p className="mb-6">
                Você pode exercer seus direitos de proteção de dados das seguintes maneiras:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Através da plataforma:</strong> Acesse as configurações de privacidade em sua conta para exportar ou excluir seus dados.
                </li>
                <li>
                  <strong>Por email:</strong> Envie sua solicitação para <a href="mailto:lgpd@clarityjournal.com.br" className="text-accent hover:underline">lgpd@clarityjournal.com.br</a>
                </li>
                <li>
                  <strong>Por correio:</strong> Envie sua solicitação para nosso endereço físico listado abaixo.
                </li>
              </ul>
              
              <p className="mb-6">
                Responderemos a todas as solicitações dentro de 15 dias úteis.
              </p>
              
              <h2 className="text-xl font-semibold mb-4">Nosso Compromisso</h2>
              <p className="mb-6">
                Estamos comprometidos com a transparência e a segurança no tratamento de seus dados pessoais. Implementamos medidas técnicas e organizacionais para proteger suas informações, incluindo:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Criptografia AES-256 para todas as entradas de diário</li>
                <li>Autenticação segura e proteção contra acesso não autorizado</li>
                <li>Políticas rigorosas de acesso a dados para nossa equipe</li>
                <li>Auditorias regulares de segurança</li>
                <li>Treinamento de conscientização sobre privacidade para todos os funcionários</li>
              </ul>
              
              <h2 className="text-xl font-semibold mb-4">Contato do Encarregado de Proteção de Dados (DPO)</h2>
              <p className="mb-6">
                Para questões específicas sobre proteção de dados ou para exercer seus direitos sob a LGPD, entre em contato com nosso Encarregado de Proteção de Dados:
              </p>
              
              <div className="bg-primary p-4 rounded-md mb-6">
                <p>Nome: Maria Silva</p>
                <p>Email: <a href="mailto:dpo@clarityjournal.com.br" className="text-accent hover:underline">dpo@clarityjournal.com.br</a></p>
                <p>Telefone: (11) 1234-5678</p>
              </div>
              
              <p>
                Estamos aqui para ajudar e garantir que seus direitos de privacidade sejam respeitados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LGPDPage;
