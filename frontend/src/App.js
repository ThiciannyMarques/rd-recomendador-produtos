import React, { useState } from 'react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';

const CardMessage = ({ icon, title, message, iconBg, iconColor }) => (
  <div className="rounded-2xl p-8 text-center shadow-lg bg-white">
    {icon && (
      <div
        className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center font-bold text-lg ${iconBg} ${iconColor}`}
      >
        {icon}
      </div>
    )}
    {title && <h3 className="mb-2 text-[#212429] font-medium">{title}</h3>}
    {message && <p className="text-sm text-[#636E7C]">{message}</p>}
  </div>
);

export default function App() {
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (newRecommendations) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 300));
    setRecommendations(newRecommendations);
    setIsLoading(false);
  };

  const renderContent = () => {
    if (isLoading)
      return (
        <CardMessage
          message="Analisando suas preferências..."
          iconBg="border-4 border-blue-600 border-t-transparent rounded-full animate-spin"
        />
      );

    if (!recommendations.length)
      return (
        <CardMessage
          icon="?"
          title="Selecione suas preferências"
          message={
            <>
              Escolha as opções ao lado e clique em{' '}
              <strong>“Obter recomendação”</strong> para ver os produtos mais
              adequados.
            </>
          }
          iconBg="bg-[#D3FAFF]"
          iconColor="text-[#005A87]"
        />
      );

    return <RecommendationList recommendations={recommendations} />;
  };

  return (
    <div className="min-h-screen bg-[#F1F3F5] py-8 px-4 sm:px-6 lg:px-8">
      <header className="max-w-7xl mx-auto mb-8">
        <h1 className="mb-3 text-2xl md:text-3xl font-bold text-[#212429]">
          Recomendador de Produtos RD Station
        </h1>
        <p className="text-sm text-[#636E7C] max-w-3xl">
          Bem-vindo ao Recomendador de Produtos RD Station. Aqui você pode
          encontrar uma variedade de produtos da RD Station, cada um projetado
          para atender às necessidades específicas do seu negócio.
        </p>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-2xl p-6 shadow-lg bg-white lg:sticky lg:top-8">
          <Form onSetRecommendations={handleFormSubmit} isLoading={isLoading} />
        </div>

        <div className="w-full">{renderContent()}</div>
      </main>
    </div>
  );
}
