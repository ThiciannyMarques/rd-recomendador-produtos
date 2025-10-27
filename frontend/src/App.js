import React, { useState } from 'react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';

function App() {
  const [recommendations, setRecommendations] = useState([]);

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:flex md:justify-center md:items-center">
      <div className="w-full max-w-6xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 text-center">
          Recomendador de Produtos RD Station
        </h1>
        
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-md grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <div className="col-span-2">
            <p className="text-sm md:text-lg text-justify">
              Bem-vindo ao Recomendador de Produtos RD Station. Aqui você pode encontrar uma variedade de produtos da RD Station, cada um projetado para atender às necessidades específicas do seu negócio.
            </p>
          </div>
          
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
            <div className="order-1">
              <Form onSetRecommendations={setRecommendations} />
            </div>
            
            <div className="order-2 md:sticky md:top-4">
              <RecommendationList recommendations={recommendations} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;