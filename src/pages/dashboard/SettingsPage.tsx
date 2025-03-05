import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Bell, Download, Trash, CreditCard, User } from 'lucide-react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('account');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'account':
        return <AccountSettings />;
      case 'privacy':
        return <PrivacySettings />;
      case 'notifications':
        return <NotificationSettings />;
      case 'subscription':
        return <SubscriptionSettings />;
      default:
        return <AccountSettings />;
    }
  };

  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <header className="bg-secondary p-4 flex items-center">
        <Link to="/dashboard" className="text-primary-text hover:text-accent mr-4">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-xl font-semibold">Configurações</h1>
      </header>
      
      {/* Main Content */}
      <main className="p-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="bg-secondary rounded-lg p-4">
                <nav>
                  <ul className="space-y-1">
                    <li>
                      <button
                        className={`w-full text-left px-3 py-2 rounded-md flex items-center space-x-2 ${
                          activeTab === 'account' 
                            ? 'bg-accent bg-opacity-20 text-accent' 
                            : 'text-secondary-text hover:bg-primary hover:text-primary-text'
                        }`}
                        onClick={() => setActiveTab('account')}
                      >
                        <User className="h-5 w-5" />
                        <span>Conta</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className={`w-full text-left px-3 py-2 rounded-md flex items-center space-x-2 ${
                          activeTab === 'privacy' 
                            ? 'bg-accent bg-opacity-20 text-accent' 
                            : 'text-secondary-text hover:bg-primary hover:text-primary-text'
                        }`}
                        onClick={() => setActiveTab('privacy')}
                      >
                        <Shield className="h-5 w-5" />
                        <span>Privacidade</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className={`w-full text-left px-3 py-2 rounded-md flex items-center space-x-2 ${
                          activeTab === 'notifications' 
                            ? 'bg-accent bg-opacity-20 text-accent' 
                            : 'text-secondary-text hover:bg-primary hover:text-primary-text'
                        }`}
                        onClick={() => setActiveTab('notifications')}
                      >
                        <Bell className="h-5 w-5" />
                        <span>Notificações</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className={`w-full text-left px-3 py-2 rounded-md flex items-center space-x-2 ${
                          activeTab === 'subscription' 
                            ? 'bg-accent bg-opacity-20 text-accent' 
                            : 'text-secondary-text hover:bg-primary hover:text-primary-text'
                        }`}
                        onClick={() => setActiveTab('subscription')}
                      >
                        <CreditCard className="h-5 w-5" />
                        <span>Assinatura</span>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            
            {/* Tab Content */}
            <div className="md:col-span-3">
              <div className="bg-secondary rounded-lg p-6">
                {renderTabContent()}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Delete Account Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-secondary rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Confirmar exclusão da conta</h2>
            <p className="text-secondary-text mb-2">
              Esta ação é <span className="text-error font-semibold">permanente e irreversível</span>. Todos os seus dados, incluindo entradas do diário e configurações, serão excluídos permanentemente.
            </p>
            <p className="text-secondary-text mb-6">
              Digite "EXCLUIR" abaixo para confirmar.
            </p>
            
            <Input
              placeholder="Digite EXCLUIR para confirmar"
              className="mb-6"
            />
            
            <div className="flex justify-end space-x-3">
              <Button 
                variant="outline" 
                onClick={() => setShowDeleteConfirm(false)}
              >
                Cancelar
              </Button>
              <Button 
                variant="outline" 
                className="text-error hover:text-error"
              >
                Excluir Permanentemente
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const AccountSettings: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Configurações da Conta</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Informações Pessoais</h3>
          <div className="space-y-4">
            <Input
              label="Nome"
              defaultValue="João Silva"
            />
            <Input
              label="Email"
              defaultValue="joao.silva@exemplo.com"
            />
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Alterar Senha</h3>
          <div className="space-y-4">
            <Input
              label="Senha Atual"
              type="password"
              placeholder="Digite sua senha atual"
            />
            <Input
              label="Nova Senha"
              type="password"
              placeholder="Digite sua nova senha"
            />
            <Input
              label="Confirmar Nova Senha"
              type="password"
              placeholder="Confirme sua nova senha"
            />
          </div>
          <div className="mt-4">
            <Button>Atualizar Senha</Button>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-700">
          <h3 className="text-lg font-semibold mb-4 text-error">Zona de Perigo</h3>
          <p className="text-secondary-text mb-4">
            A exclusão da sua conta é permanente. Todos os seus dados serão removidos permanentemente.
          </p>
          <Button 
            variant="outline" 
            className="text-error hover:text-error"
            onClick={() => setShowDeleteConfirm(true)}
          >
            <Trash className="h-4 w-4 mr-2" /> Excluir Conta
          </Button>
        </div>
      </div>
    </div>
  );
};

const PrivacySettings: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Configurações de Privacidade</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Inteligência Artificial</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="ai-enabled"
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 text-accent focus:ring-accent border-gray-600 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="ai-enabled" className="font-medium text-primary-text">
                  Habilitar análise de IA
                </label>
                <p className="text-secondary-text">
                  Permite que a IA analise suas entradas para fornecer insights personalizados.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="ai-suggestions"
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 text-accent focus:ring-accent border-gray-600 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="ai-suggestions" className="font-medium text-primary-text">
                  Mostrar sugestões de escrita
                </label>
                <p className="text-secondary-text">
                  Receba sugestões de prompts para ajudar em sua escrita reflexiva.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Exportação de Dados</h3>
          <p className="text-secondary-text mb-4">
            Você pode exportar todos os seus dados em formato JSON. Isso inclui todas as suas entradas de diário e configurações.
          </p>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" /> Exportar Meus Dados
          </Button>
        </div>
        
        <div className="pt-6 border-t border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Conformidade com LGPD</h3>
          <p className="text-secondary-text mb-4">
            De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a acessar, corrigir e excluir seus dados pessoais.
          </p>
          <Link to="/lgpd">
            <Button variant="outline">
              Saiba Mais Sobre Seus Direitos
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const NotificationSettings: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Configurações de Notificações</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Lembretes de Escrita</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="daily-reminder"
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 text-accent focus:ring-accent border-gray-600 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="daily-reminder" className="font-medium text-primary-text">
                  Lembrete diário
                </label>
                <p className="text-secondary-text">
                  Receba um lembrete diário para escrever em seu diário.
                </p>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-primary-text mb-1">
                Horário do lembrete
              </label>
              <select className="bg-primary border border-gray-700 rounded-md px-3 py-2 w-full text-primary-text">
                <option>07:00</option>
                <option>08:00</option>
                <option>09:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Notificações por Email</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="product-updates"
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 text-accent focus:ring-accent border-gray-600 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="product-updates" className="font-medium text-primary-text">
                  Atualizações do produto
                </label>
                <p className="text-secondary-text">
                  Receba emails sobre novos recursos e melhorias.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="tips"
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 text-accent focus:ring-accent border-gray-600 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="tips" className="font-medium text-primary-text">
                  Dicas de reflexão
                </label>
                <p className="text-secondary-text">
                  Receba dicas semanais para melhorar sua prática de journaling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SubscriptionSettings: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Gerenciar Assinatura</h2>
      
      <div className="bg-primary p-4 rounded-lg mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold">Plano Premium</h3>
            <p className="text-secondary-text text-sm">Renovação em 15/09/2023</p>
          </div>
          <div className="text-right">
            <p className="font-bold">R$79,90/mês</p>
            <p className="text-secondary-text text-sm">Próxima cobrança: R$79,90</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Método de Pagamento</h3>
          <div className="bg-primary p-4 rounded-lg flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-gray-700 rounded p-2 mr-3">
                <CreditCard className="h-6 w-6" />
              </div>
              <div>
                <p className="font-medium">•••• •••• •••• 4242</p>
                <p className="text-secondary-text text-sm">Expira em 12/2025</p>
              </div>
            </div>
            <Button variant="outline" size="sm">Atualizar</Button>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Histórico de Pagamentos</h3>
          <div className="bg-primary rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-800">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-secondary-text uppercase tracking-wider">
                    Data
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-secondary-text uppercase tracking-wider">
                    Valor
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-secondary-text uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-secondary-text uppercase tracking-wider">
                    Recibo
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">15/08/2023</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">R$79,90</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Pago
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-accent hover:underline">
                    <a href="#">Ver recibo</a>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">15/07/2023</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">R$79,90</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Pago
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-accent hover:underline">
                    <a href="#">Ver recibo</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Gerenciar Plano</h3>
          <div className="space-y-4">
            <Button variant="outline">
              Mudar de Plano
            </Button>
            <Button variant="outline" className="text-error hover:text-error">
              Cancelar Assinatura
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
