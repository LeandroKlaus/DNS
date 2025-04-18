import React, { useState } from 'react';

interface ModalProps {
  closeModal: () => void;
  modalType: string;
  selectedConsumivel: any;
}

const Modal: React.FC<ModalProps> = ({ closeModal, modalType, selectedConsumivel }) => {
  const [parcelas, setParcelas] = useState<string>('');
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handlePrevImage = () => {
    if (selectedConsumivel.images && selectedConsumivel.images.length > 0) {
      setCurrentImageIndex(prevIndex =>
        prevIndex === 0 ? selectedConsumivel.images.length - 1 : prevIndex - 1
      );
    }
  };

  const handleNextImage = () => {
    if (selectedConsumivel.images && selectedConsumivel.images.length > 0) {
      setCurrentImageIndex(prevIndex =>
        prevIndex === selectedConsumivel.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const handleComprarAvista = () => {
    const mensagem = `Olá, desejo adquirir o produto ${selectedConsumivel.modelo} como podemos prosseguir?`;
    const whatsappLink = `https://wa.me/5592984615420?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappLink, '_blank');
  };

  const handleComprarParcelamento = () => {
    if (!parcelas) {
      alert("Por favor, selecione uma opção de parcelamento.");
      return;
    }
    const mensagem = `Olá, desejo adquirir o produto ${selectedConsumivel.modelo} em ${parcelas} vezes, como podemos prosseguir?`;
    const whatsappLink = `https://wa.me/5592984615420?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {modalType === 'avista' && (
          <>
            <h2>{selectedConsumivel.modelo} - À vista</h2>
            <p>Valor: {selectedConsumivel.valor ? selectedConsumivel.valor : 'Valor não disponível'}</p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '20px',
                gap: '10px',
              }}
            >
              <button className="btn" onClick={handleComprarAvista}>Comprar</button>
              <button className="btn" onClick={closeModal}>Fechar</button>
            </div>
          </>
        )}
        {modalType === 'parcelamento' && (
          <>
            <h2>{selectedConsumivel.modelo} - Parcelamento</h2>
            <p>Selecione o número de parcelas:</p>
            <div className="parcelas-options">
              {Array.from({ length: 11 }, (_, i) => {
                const option = i + 2;
                return (
                  <label key={option} className="parcelas-option">
                    <input
                      type="radio"
                      name="parcelas"
                      value={option}
                      checked={parcelas === option.toString()}
                      onChange={(e) => setParcelas(e.target.value)}
                    />
                    {`Parcelar em ${option}x`}
                  </label>
                );
              })}
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '20px',
                gap: '10px',
              }}
            >
              <button className="btn" onClick={handleComprarParcelamento}>Comprar</button>
              <button className="btn" onClick={closeModal}>Fechar</button>
            </div>
          </>
        )}
        {modalType === 'informacoes' && (
          <>
            <h2>{selectedConsumivel.modelo} - Informações</h2>
            {selectedConsumivel.images && selectedConsumivel.images.length > 0 ? (
              <div className="carousel-container">
                <button className="carousel-btn" onClick={handlePrevImage}>Anterior</button>
                <img
                  src={selectedConsumivel.images[currentImageIndex]}
                  alt={`Imagem ${currentImageIndex + 1}`}
                  className="carousel-img"
                />
                <button className="carousel-btn" onClick={handleNextImage}>Próxima</button>
              </div>
            ) : (
              <p>Imagem não disponível</p>
            )}
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <button className="btn" onClick={closeModal}>Fechar</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
