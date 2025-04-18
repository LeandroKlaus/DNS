// Duraveis.tsx
import React from 'react';
import "../styles/Duraveis.css";

interface DuraveisProps {
  duraveis: any[];
  handleFinanciamento: (duravel: any) => void;
  handleConsorcio: (duravel: any) => void;
  handleInformacoes: (duravel: any) => void;
}

const Duraveis: React.FC<DuraveisProps> = ({ duraveis, handleFinanciamento, handleConsorcio, handleInformacoes }) => {
  return (
    <div className="duraveis-gallery">
      {duraveis.map((item, index) => (
        <div key={index} className="duraveis-card">
          <img src={item.imagem} alt={`Modelo de Durável ${item.modelo}`} className="duraveis-image" />
          <h3 className="duraveis-name">{item.modelo}</h3>
          <div className="duraveis-buttons">
            <button className="btn" onClick={() => handleFinanciamento(item)}>Financiamento</button>
            <button className="btn" onClick={() => handleConsorcio(item)}>Consórcio</button>
            <button className="btn" onClick={() => handleInformacoes(item)}>Informações</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Duraveis;
