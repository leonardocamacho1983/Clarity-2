import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Settings, LogOut, Search, Plus, Calendar, List, Grid, User } from 'lucide-react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

const DashboardPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  // Mock data for journal entries
  const entries = [
    {
      id: '1',
      title: 'Reflexão sobre metas pessoais',
      preview: 'Hoje refleti sobre minhas metas para os próximos meses. Percebi que preciso focar mais em...',
      date: '2023-08-10T14:30:00',
      hasInsights: true
    },
    {
      id: '2',
      title: 'Desafios no trabalho',
      preview: 'O projeto atual está sendo mais desafiador do que esperava. Estou tentando encontrar maneiras de...',
      date: '2023-08-08T19:15:00',
      hasInsights: true
    },
    {
      id: '3',
      title: 'Pensamentos sobre o fim de semana',
      preview: 'O fim de semana foi revigorante. Consegui descansar e também dedicar tempo para...',
      date: '2023-08-06T10:45:00',
      hasInsights: false
    },
    {
      id: '4',
      title: 'Reflexões sobre leituras recentes',
      preview: 'Terminei de ler aquele livro sobre hábitos e estou pensando em como aplicar os conceitos na minha rotina...',
      date: '2023-08-04T21:20:00',
      hasInsights: true
    },
    {
      id: '5',
      title: 'Planejamento de viagem',
      preview: 'Estou planejando uma viagem para o próximo mês. Quero visitar lugares que me permitam...',
      date: '2023-08-01T16:10:00',
      hasInsights: false
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-primary flex">
      {/* Sidebar */}
      <aside className="w-64 bg-secondary hidden md:block">
        <div className="p-4 h-full flex flex-col">
          <div className="flex items-center space-x-2 mb-8">
            <BookOpen className="h-6 w-6 text-accent" />
            <span className="text-xl font-bold">Clarity Journal</span>
          </div>
          
          <nav className="flex-grow">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/dashboard"
                  className="flex items-center space-x-2 p-2 rounded-md bg-accent bg-opacity-20 text-accent"
                >
                  <BookOpen className="h-5 w-5" />
                  <span>Meu Diário</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/insights"
                  className="flex items-center space-x-2 p-2 rounded-md text-secondary-text hover:bg-primary hover:text-primary-text"
                >
                  <Sparkles className="h-5 w-5" />
                  <span>Insights</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/profile"
                  className="flex items-center space-x-2 p-2 rounded-md text-secondary-text hover:bg-primary hover:text-primary-text"
                >
                  <User className="h-5 w-5" />
                  <span>Perfil</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/settings"
                  className="flex items-center space-x-2 p-2 rounded-md text-secondary-text hover:bg-primary hover:text-primary-text"
                >
                  <Settings className="h-5 w-5" />
                  <span>Configurações</span>
                </Link>
              </li>
            </ul>
          </nav>
          
          <div className="pt-4 border-t border-gray-700">
            <Link
              to="/logout"
              className="flex items-center space-x-2 p-2 rounded-md text-secondary-text hover:bg-primary hover:text-primary-text"
            >
              <LogOut className="h-5 w-5" />
              <span>Sair</span>
            </Link>
          </div>
        </div>
      </aside>
      
      {/* Main Content */}
      <div className="flex-grow">
        {/* Mobile Header */}
        <header className="bg-secondary p-4 flex items-center justify-between md:hidden">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-accent" />
            <span className="text-xl font-bold">Clarity Journal</span>
          </div>
          <button className="text-primary-text">
            <Menu className="h-6 w-6" />
          </button>
        </header>
        
        {/* Dashboard Content */}
        <main className="p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold mb-1">Meu Diário</h1>
              <p className="text-secondary-text">Registre seus pensamentos e receba insights personalizados</p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <Link to="/dashboard/new-entry">
                <Button>
                  <Plus className="h-4 w-4 mr-2" /> Nova Entrada
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="bg-secondary rounded-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 mb-6">
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <Input
                    placeholder="Buscar entradas..."
                    className="pl-10"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-text" />
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-secondary-text" />
                  <select className="bg-primary border border-gray-700 rounded-md px-2 py-1 text-sm text-primary-text">
                    <option value="all">Todas as datas</option>
                    <option value="this-week">Esta semana</option>
                    <option value="this-month">Este mês</option>
                    <option value="last-month">Mês passado</option>
                  </select>
                </div>
                
                <div className="flex items-center space-x-1 bg-primary rounded-md p-1">
                  <button
                    className={`p-1 rounded ${viewMode === 'grid' ? 'bg-secondary text-accent' : 'text-secondary-text'}`}
                    onClick={() => setViewMode('grid')}
                    aria-label="Visualização em grade"
                  >
                    <Grid className="h-5 w-5" />
                  </button>
                  <button
                    className={`p-1 rounded ${viewMode === 'list' ? 'bg-secondary text-accent' : 'text-secondary-text'}`}
                    onClick={() => setViewMode('list')}
                    aria-label="Visualização em lista"
                  >
                    <List className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
            
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {entries.map(entry => (
                  <Link to={`/dashboard/entry/${entry.id}`} key={entry.id}>
                    <div className="bg-primary rounded-lg p-4 hover:bg-opacity-80 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{entry.title}</h3>
                        {entry.hasInsights && (
                          <Sparkles className="h-4 w-4 text-accent flex-shrink-0" />
                        )}
                      </div>
                      <p className="text-secondary-text text-sm mb-3 line-clamp-3">
                        {entry.preview}
                      </p>
                      <p className="text-xs text-secondary-text">
                        {formatDate(entry.date)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {entries.map(entry => (
                  <Link to={`/dashboard/entry/${entry.id}`} key={entry.id}>
                    <div className="bg-primary rounded-lg p-4 hover:bg-opacity-80 transition-colors">
                      <div className="flex justify-between">
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold">{entry.title}</h3>
                            {entry.hasInsights && (
                              <Sparkles className="h-4 w-4 text-accent" />
                            )}
                          </div>
                          <p className="text-secondary-text text-sm line-clamp-1">
                            {entry.preview}
                          </p>
                        </div>
                        <p className="text-xs text-secondary-text whitespace-nowrap ml-4">
                          {formatDate(entry.date)}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
