import React from 'react';
import Layout from '../../components/layout/Layout';

const TermsPage: React.FC = () => {
  return (
    <Layout>
      <div className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Termos de Uso</h1>
            
            <div className="bg-secondary rounded-lg p-8">
              <p className="mb-6">
                Última atualização: 15 de Agosto de 2023
              </p>
              
              <h2 className="text-xl font-semibold mb-4">1. Aceitação dos Termos</h2>
              <p className="mb-6">
                Ao acessar ou usar o Clarity Journal, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não poderá acessar ou usar nosso serviço.
              </p>
              
              <h2 className="text-xl font-semibold mb-4">2. Descrição do Serviço</h2>
              <p className="mb-6">
                O Clarity Journal é um aplicativo de journaling assistido por IA que permite aos usuários registrar pensamentos, receber insights personalizados e acompanhar seu crescimento pessoal. Nosso serviço inclui recursos gratuitos e pagos, conforme descrito em nosso site.
              </p>
              
              <h2 className="text-xl font-semibold mb-4">3. Contas de Usuário</h2>
              <p className="mb-6">
                Para usar certos recursos do nosso serviço, você precisará criar uma conta. Você é responsável por manter a confidencialidade de suas credenciais de conta e por todas as atividades que ocorrerem em sua conta. Você deve notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta.
              </p>
              
              <h2 className="text-xl font-semibold mb-4">4. Assinaturas e Pagamentos</h2>
              <p className="mb-4">
                Oferecemos diferentes planos de assinatura com recursos variados:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>As assinaturas são cobradas no início de cada período de faturamento (mensal ou anual).</li>
                <li>As assinaturas são renovadas automaticamente, a menos que você cancele antes do próximo ciclo de faturamento.</li>
                <li>Você pode cancelar sua assinatura a qualquer momento através das configurações da sua conta.</li>
                <li>Reembolsos são processados de acordo com nossa política de reembolso.</li>
              </ul>
              
              <h2 className="text-xl font-semibold mb-4">5. Conteúdo do Usuário</h2>
              <p className="mb-6">
                Você mantém todos os direitos sobre o conteúdo que cria em nosso serviço. Ao usar o Clarity Journal, você nos concede uma licença limitada para armazenar, processar e analisar seu conteúdo exclusivamente para fornecer e melhorar nossos serviços.
              </p>
              
              <h2 className="text-xl font-semibold mb-4">6. Limitações da IA</h2>
              <p className="mb-6">
                Nossa tecnologia de IA é projetada para fornecer insights e promover a reflexão. Ela não substitui aconselhamento médico, psicológico ou terapêutico profissional. Os insights gerados são sugestivos e não devem ser considerados diagnósticos ou tratamentos.
              </p>
              
              <h2 className="text-xl font-semibold mb-4">7. Propriedade Intelectual</h2>
              <p className="mb-6">
                O Clarity Journal e todo o conteúdo, recursos e funcionalidades são de propriedade da nossa empresa e estão protegidos por leis de propriedade intelectual. Você não pode reproduzir, distribuir, modificar ou criar trabalhos derivados do nosso conteúdo sem autorização expressa.
              </p>
              
              <h2 className="text-xl font-semibold mb-4">8. Limitação de Responsabilidade</h2>
              <p className="mb-6">
                Em nenhuma circunstância seremos responsáveis por danos indiretos, incidentais, especiais, consequenciais ou punitivos decorrentes do uso ou incapacidade de usar nosso serviço.
              </p>
              
              <h2 className="text-xl font-semibold mb-4">9. Modificações dos Termos</h2>
              <p className="mb-6">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. Notificaremos os usuários sobre alterações significativas. O uso continuado do serviço após tais modificações constitui aceitação dos novos termos.
              </p>
              
              <h2 className="text-xl font-semibold mb-4">10. Lei Aplicável</h2>
              <p className="mb-6">
                Estes termos são regidos pelas leis do Brasil, especificamente a Lei Geral de Proteção de Dados (LGPD) e o Código de Defesa do Consumidor.
              </p>
              
              <h2 className="text-xl font-semibold mb-4">11. Contato</h2>
              <p className="mb-6">
                Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco pelo e-mail: <a href="mailto:termos@clarityjournal.com.br" className="text-accent hover:underline">termos@clarityjournal.com.br</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsPage;
