function RecommendationList({ recommendations, currentMode }) {
  if (!recommendations?.length) {
    return (
      <div className="rounded-2xl p-12 text-center shadow-lg bg-white">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-[#FFE8C2] text-red-700 font-bold text-lg">
          X
        </div>
        <h3 className="mb-2 text-[#212429] font-medium">Nenhum produto encontrado</h3>
        <p className="text-sm text-[#636E7C]">
          Tente selecionar algumas preferências ou funcionalidades para encontrar produtos adequados
        </p>
      </div>
    );
  }

  const Tag = ({ children, bg, color }) => (
    <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: bg, color }}>
      {children}
    </span>
  );

  const renderPreferences = (prefs) => {
    const displayed = prefs.slice(0, 3);
    return (
      <div className="flex flex-wrap gap-1">
        {displayed.map((pref, i) => (
          <Tag key={i} bg="#F6FED0" color="#182020">{pref}</Tag>
        ))}
        {prefs.length > 3 && <Tag bg="#F1F3F5" color="#636E7C">+{prefs.length - 3} mais</Tag>}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl p-6 shadow-lg bg-white">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold text-[#212429]">
            {recommendations.length === 1 ? "Produto Recomendado" : "Produtos Recomendados"}
          </h2>
          <Tag
            bg={currentMode === "SingleProduct" ? "#D1A5FF" : "#94EFF1"}
            color="#003D5C"
          >
            {recommendations.length === 1 ? "Produto Único" : "Múltiplos Produtos"}
          </Tag>
        </div>
        <p className="text-sm text-[#636E7C]">
          Encontramos {recommendations.length} {recommendations.length === 1 ? "produto" : "produtos"} que atendem suas necessidades
        </p>
      </div>

      <div className="space-y-4">
        {recommendations.map((rec, index) => (
          <div
            key={rec.id || index}
            className="rounded-2xl p-6 shadow-lg hover:shadow-xl bg-white"
            style={{ borderLeft: "4px solid #C3F628" }}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Tag bg="#F1F3F5" color="#636E7C">#{index + 1}</Tag>
                </div>
                <h3 className="text-[#0000EE] font-semibold mb-1">{rec.name}</h3>
              </div>
              {rec.highlight && <Tag bg="#F0E3FF" color="#003D5C">{rec.highlight}</Tag>}
            </div>

            {rec.description && <p className="text-sm text-[#636E7C] mb-2">{rec.description}</p>}

            {rec.preferences?.length > 0 && (
              <div>
                <p className="text-xs mb-1 text-[#003D5C]">Preferências atendidas:</p>
                {renderPreferences(rec.preferences)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendationList;
