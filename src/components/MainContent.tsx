import React from 'react';
import MotoGallery from './MotoGallery';

interface MainContentProps {
  motos: any[];
  handleFinanciamento: (moto: any) => void;
  handleConsorcio: (moto: any) => void;
  handleInformacoes: (moto: any) => void;
}

const MainContent: React.FC<MainContentProps> = ({ motos, handleFinanciamento, handleConsorcio, handleInformacoes }) => {
  return (
    <div className="main-content">
      <h1 className="main-title">Gustavo Sadok, seu consultor autorizado Yamaha.</h1>
      <p className="main-description">Compre agora sua moto 0km.</p>
      <MotoGallery motos={motos} handleFinanciamento={handleFinanciamento} handleConsorcio={handleConsorcio} handleInformacoes={handleInformacoes} />
    </div>
  );
};

export default MainContent;
