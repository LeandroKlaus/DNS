import React from 'react';

interface MotoGalleryProps {
  motos: any[];
  handleFinanciamento: (moto: any) => void;
  handleConsorcio: (moto: any) => void;
  handleInformacoes: (moto: any) => void;
}

const MotoGallery: React.FC<MotoGalleryProps> = ({ motos, handleFinanciamento, handleConsorcio, handleInformacoes }) => {
  return (
    <div className="moto-gallery">
      {motos.map((moto, index) => (
        <div key={index} className="moto-card">
          <img src={moto.imagem} alt={`Modelo de Moto ${moto.modelo}`} className="moto-image" />
          <h3 className="moto-name">{moto.modelo}</h3> {/* Nome da moto adicionado aqui */}
          <div className="moto-buttons">
            <button className="btn" onClick={() => handleFinanciamento(moto)}>Financiamento</button>
            <button className="btn" onClick={() => handleConsorcio(moto)}>Consórcio</button>
            <button className="btn" onClick={() => handleInformacoes(moto)}>Informações</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MotoGallery;
