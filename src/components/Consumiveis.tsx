import React from 'react';

interface ConsumiveisProps {
  consumiveis: any[];
  handleAvista: (consumivel: any) => void;
  handleParcelamento: (consumivel: any) => void;
  handleInformacoes: (consumivel: any) => void;
}

const Consumiveis: React.FC<ConsumiveisProps> = ({ consumiveis, handleAvista, handleParcelamento, handleInformacoes }) => {
  return (
    <div className="consumiveis-gallery">
      {consumiveis.map((consumivel, index) => (
        <div key={index} className="consumiveis-card">
          <img src={consumivel.imagem} alt={`Modelo de Consumível ${consumivel.modelo}`} className="consumiveis-image" />
          <h3 className="consumiveis-name">{consumivel.modelo}</h3>
          <div className="consumiveis-buttons">
            <button className="btn" onClick={() => handleAvista(consumivel)}>À vista</button>
            <button className="btn" onClick={() => handleParcelamento(consumivel)}>Parcelamento</button>
            <button className="btn" onClick={() => handleInformacoes(consumivel)}>Informações</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Consumiveis;
