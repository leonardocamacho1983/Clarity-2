import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Save, Sparkles, HelpCircle } from 'lucide-react';
import Button from '../../components/ui/Button';
import Textarea from '../../components/ui/Textarea';

const NewEntryPage: React.FC = () => {
  const [content, setContent] = useState('');
  const [aiEnabled, setAiEnabled] = useState(true);
  const [aiInsights, setAiInsights] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    
    // Clear AI insights when content changes significantly
    if (aiInsights && e.target.value.length < content.length - 50) {
      setAiInsights(null);
    }
  };
  
  const generateInsights = () => {
    // In a real app, this would call an API to generate insights
    setAiInsights(
      "Parece que você está refletindo sobre desafios pessoais. Considere explorar como esses desafios se relacionam com seus valores fundamentais. Algumas perguntas para aprofundar sua reflexão:\n\n1. O que esses desafios revelam sobre o que é importante para você?\n\n2. Como suas reações a esses desafios refletem seus padrões de pensamento habituais?\n\n3. Que oportunidades de crescimento você identifica nessas situações?"
    );
  };
  
  const handleSave = () => {
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      // In a real app, this would save the entry and redirect
      console.log('Entry saved:', { content, aiInsights });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <header className="bg-secondary p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/dashboard" className="text-primary-text hover:text-accent">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-xl font-semibold">Nova Entrada</h1>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="ai-toggle"
              checked={aiEnabled}
              onChange={() => setAiEnabled(!aiEnabled)}
              className="h-4 w-4 text-accent focus:ring-accent border-gray-600 rounded"
            />
            <label htmlFor="ai-toggle" className="text-sm text-secondary-text flex items-center">
              Insights de IA
              <HelpCircle className="h-4 w-4 ml-1 text-secondary-text" />
            </label>
          </div>
          
          <Button 
            onClick={handleSave} 
            isLoading={isSaving}
            disabled={!content.trim()}
          >
            <Save className="h-4 w-4 mr-2" /> Salvar
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
                <Textarea
                  placeholder="O que está em sua mente hoje? Escreva livremente sobre seus pensamentos, sentimentos e experiências..."
                  value={content}
                  onChange={handleContentChange}
                  className="min-h-[400px] text-primary-text"
                />
                
                <div className="mt-4 flex justify-between items-center text-sm text-secondary-text">
                  <div>
                    {content.length > 0 ? `${content.length} caracteres` : 'Comece a escrever...'}
                  </div>
                  <div>
                    Salvo automaticamente às {new Date().toLocaleTimeString('pt-BR')}
                  </div>
                </div>
              </div>
            </div>
            
            {/* AI Insights */}
            <div className="lg:col-span-1">
              <div className="bg-secondary rounded-lg p-6 h-full">
                <div className="flex items-center space-x-2 mb-4">
                  <Sparkles className="h-5 w-5 text-accent" />
                  <h2 className="text-lg font-semibold">Insights da IA</h2>
                </div>
                
                {!aiEnabled ? (
                  <div className="bg-primary p-4 rounded-md">
                    <p className="text-secondary-text text-sm">
                      Os insights de IA estão desativados. Ative-os para receber sugestões personalizadas baseadas em sua escrita.
                    </p>
                  </div>
                ) : content.length < 100 ? (
                  <div className="bg-primary p-4 rounded-md">
                    <p className="text-secondary-text text-sm">
                      Continue escrevendo... Os insights serão gerados quando você tiver escrito um pouco mais.
                    </p>
                  </div>
                ) : aiInsights ? (
                  <div className="bg-primary p-4 rounded-md">
                    <p className="text-secondary-text text-sm whitespace-pre-line">
                      {aiInsights}
                    </p>
                  </div>
                ) : (
                  <div className="bg-primary p-4 rounded-md">
                    <p className="text-secondary-text text-sm mb-4">
                      Pronto para receber insights sobre sua escrita? Nosso assistente de IA pode oferecer perguntas reflexivas e observações para aprofundar seu autoconhecimento.
                    </p>
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      onClick={generateInsights}
                    >
                      <Sparkles className="h-4 w-4 mr-2" /> Gerar Insights
                    </Button>
                  </div>
                )}
                
                <div className="mt-6">
                  <h3 className="text-sm font-medium mb-3">Prompts Sugeridos</h3>
                  <div className="space-y-2">
                    <button className="w-full text-left p-2 bg-primary rounded-md text-sm hover:bg-opacity-80 transition-colors">
                      O que estou sentindo neste momento?
                    </button>
                    <button className="w-full text-left p-2 bg-primary rounded-md text-sm hover:bg-opacity-80 transition-colors">
                      Quais são meus maiores desafios atualmente?
                    </button>
                    <button className="w-full text-left p-2 bg-primary rounded-md text-sm hover:bg-opacity-80 transition-colors">
                      O que aprendi hoje que me surpreendeu?
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewEntryPage;
