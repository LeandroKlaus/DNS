import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Modal2 from './components/Modal2';
import { consumiveis } from './models/Consumiveis';
import { duraveis } from './models/Duraveis';
import './styles/Header.css';
import './styles/MainContent.css';
import './styles/Consumiveis.css';
import './styles/Duraveis.css';
import './styles/Footer.css';
import './styles/Modal.css';
import './styles/Modal2.css';
import './App.css';

const App: React.FC = () => {
  const [isFooterVisible, setIsFooterVisible] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsFooterVisible(window.innerHeight + window.scrollY >= document.body.offsetHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedConsumivel, setSelectedConsumivel] = useState<any>(null);
  const [modalType, setModalType] = useState<string>('');

  const handleAvista = (consumivel: any) => {
    setSelectedConsumivel(consumivel);
    setModalType('avista');
    setShowModal(true);
  };

  const handleParcelamento = (consumivel: any) => {
    setSelectedConsumivel(consumivel);
    setModalType('parcelamento');
    setShowModal(true);
  };

  const handleInformacoesConsumiveis = (consumivel: any) => {
    setSelectedConsumivel(consumivel);
    setModalType('informacoes');
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedConsumivel(null);
    setModalType('');
  };

  const [showModal2, setShowModal2] = useState<boolean>(false);
  const [selectedDuravel, setSelectedDuravel] = useState<any>(null);
  const [modalType2, setModalType2] = useState<string>('');

  const handleDuravelFinanciamento = (duravel: any) => {
    setSelectedDuravel(duravel);
    setModalType2('financiamento');
    setShowModal2(true);
  };

  const handleDuravelConsorcio = (duravel: any) => {
    setSelectedDuravel(duravel);
    setModalType2('consorcio');
    setShowModal2(true);
  };

  const handleDuravelInformacoes = (duravel: any) => {
    setSelectedDuravel(duravel);
    setModalType2('informacoes');
    setShowModal2(true);
  };

  const closeModal2 = () => {
    setShowModal2(false);
    setSelectedDuravel(null);
    setModalType2('');
  };

  return (
    <div className="container">
      <Header />
      <MainContent 
        consumiveis={consumiveis}
        duraveis={duraveis}
        handleAvista={handleAvista}
        handleParcelamento={handleParcelamento}
        handleInformacoesConsumiveis={handleInformacoesConsumiveis}
        handleDuravelFinanciamento={handleDuravelFinanciamento}
        handleDuravelConsorcio={handleDuravelConsorcio}
        handleDuravelInformacoes={handleDuravelInformacoes}
      />
      <Footer isFooterVisible={isFooterVisible} />

      {showModal && selectedConsumivel && (
        <Modal 
          closeModal={closeModal}
          modalType={modalType}
          selectedConsumivel={selectedConsumivel}
        />
      )}

      {showModal2 && selectedDuravel && (
        <Modal2 
          closeModal={closeModal2}
          modalType={modalType2}
          selectedDuravel={selectedDuravel}
        />
      )}
    </div>
  );
};

export default App;
