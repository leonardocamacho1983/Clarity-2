import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Edit, Trash, Sparkles, Calendar, Clock } from 'lucide-react';
import Button from '../../components/ui/Button';

const EntryDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  
  // Mock data for a single journal entry
  const entry = {
    id: id || '1',
    title: 'Reflexão sobre metas pessoais',
    content: `Hoje refleti sobre minhas metas para os próximos meses. Percebi que preciso focar mais em meu desenvolvimento pessoal e menos em coisas que não estão sob meu controle.

Tenho dedicado muito tempo a preocupações sobre o futuro, em vez de agir no presente. Isso tem me causado ansiedade e impedido que eu aproveite o momento atual.

Decidi estabelecer algumas metas concretas:
1. Dedicar 30 minutos por dia à leitura
2. Praticar meditação pela manhã
3. Limitar o tempo nas redes sociais

Acredito que essas mudanças simples podem ter um impacto significativo no meu bem-estar e produtividade. Vou revisitar essas metas em um mês para avaliar meu progresso.`,
    date: '2023-08-10T14:30:00',
    aiInsights: `Observo que você está fazendo uma transição importante de preocupação para ação. Isso é um padrão positivo de crescimento.

Algumas reflexões adicionais para considerar:

1. Você mencionou "coisas que não estão sob meu controle". Pode ser útil listar especificamente quais são essas coisas para reconhecê-las mais facilmente quando surgirem.

2. Suas metas são específicas e alcançáveis, o que aumenta suas chances de sucesso. Considere também definir como você vai medir seu progresso em cada uma delas.

3. A decisão de revisitar suas metas em um mês demonstra comprometimento com a mudança e autoconsciência sobre a importância do acompanhamento.`
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleDelete = () => {
    console.log('Deleting entry:', id);
    // In a real app, this would delete the entry and redirect
  };

  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <header className="bg-secondary p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/dashboard" className="text-primary-text hover:text-accent">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-xl font-semibold">{entry.title}</h1>
        </div>
        
        <div className="flex items-center space-x-3">
          <Link to={`/dashboard/edit/${id}`}>
            <Button variant="outline">
              <Edit className="h-4 w-4 mr-2" /> Editar
            </Button>
          </Link>
          
          <Button 
            variant="outline" 
            className="text-error hover:text-error"
            onClick={() => setShowDeleteConfirm(true)}
          >
            <Trash className="h-4 w-4" />
          </Button>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="p-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Journal Entry */}
            <div className="lg:col-span-2">
              <div className="bg-secondary rounded-lg p-6">
                <div className="flex items-center space-x-4 text-sm text-secondary-text mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(entry.date)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {formatTime(entry.date)}
                  </div>
                </div>
                
                <div className="prose prose-invert max-w-none">
                  {entry.content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
            
            {/* AI Insights */}
            <div className="lg:col-span-1">
              <div className="bg-secondary rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Sparkles className="h-5 w-5 text-accent" />
                  <h2 className="text-lg font-semibold">Insights da IA</h2>
                </div>
                
                <div className="bg-primary p-4 rounded-md">
                  <p className="text-secondary-text text-sm whitespace-pre-line">
                    {entry.aiInsights}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-secondary rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Confirmar exclusão</h2>
            <p className="text-secondary-text mb-6">
              Tem certeza que deseja excluir esta entrada? Esta ação não pode ser desfeita.
            </p>
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
                onClick={handleDelete}
              >
                Excluir
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EntryDetailPage;
