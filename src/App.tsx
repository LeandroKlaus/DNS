import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { motos } from './models/Motos';
import './styles/Header.css';
import './styles/MainContent.css';
import './styles/MotoGallery.css';
import './styles/Footer.css';
import './styles/Modal.css';
import './App.css';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedMoto, setSelectedMoto] = useState<any>(null);
  const [modalType, setModalType] = useState<string>('');
  const [isFooterVisible, setIsFooterVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        setIsFooterVisible(true);
      } else {
        setIsFooterVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleFinanciamento = (moto: any) => {
    console.log('Selected Moto for Financiamento:', moto);
    setSelectedMoto(moto);
    setModalType('financiamento');
    setShowModal(true);
  };

  const handleConsorcio = (moto: any) => {
    console.log('Selected Moto for Consorcio:', moto);
    setSelectedMoto(moto);
    setModalType('consorcio');
    setShowModal(true);
  };

  const handleInformacoes = (moto: any) => {
    console.log('Selected Moto for Informacoes:', moto);
    setSelectedMoto(moto);
    setModalType('informacoes');
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedMoto(null);
    setModalType('');
  };

  return (
    <div className="container">
      <Header />
      <MainContent 
        motos={motos} 
        handleFinanciamento={handleFinanciamento} 
        handleConsorcio={handleConsorcio} 
        handleInformacoes={handleInformacoes} 
      />
      <Footer isFooterVisible={isFooterVisible} />
      {showModal && selectedMoto && (
        <Modal 
          closeModal={closeModal} 
          modalType={modalType} 
          selectedMoto={selectedMoto} 
        />
      )}
    </div>
  );
};

export default App;
