import React, { useState } from 'react';

interface Modal2Props {
  closeModal: () => void;
  modalType: string;
  selectedDuravel: any;
}

const Modal2: React.FC<Modal2Props> = ({ closeModal, modalType, selectedDuravel }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [entryValue, setEntryValue] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [cpf, setCpf] = useState('');
  const [fullName, setFullName] = useState('');
  const [celular, setCelular] = useState('');
  const [habilitacao, setHabilitacao] = useState('');
  const [ddd, setDdd] = useState('');

  const handlePrevImage = () => {
    if (selectedDuravel.images && selectedDuravel.images.length > 0) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedDuravel.images.length - 1 : prevIndex - 1
      );
    }
  };

  const handleNextImage = () => {
    if (selectedDuravel.images && selectedDuravel.images.length > 0) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedDuravel.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  if (modalType === 'financiamento') {
    return (
      <div className="modal2-overlay" onClick={closeModal}>
        {/* Para financiamento, usamos apenas a classe "modal2" */}
        <div className="modal2" onClick={(e) => e.stopPropagation()}>
          <h2>{selectedDuravel.modelo} - Financiamento</h2>
          <form
            className="financiamento-form"
            onSubmit={(e) => {
              e.preventDefault();
              const message = `Olá, estou interessado em financiar o produto ${selectedDuravel.modelo}.\nValor de entrada: ${entryValue}\nData de nascimento: ${birthDate}\nCPF: ${cpf}\nNome completo: ${fullName}\nCelular: ${celular}\nPossui Habilitação: ${habilitacao}\nDDD: ${ddd}.`;
              const whatsappLink = `https://wa.me/5592984615420?text=${encodeURIComponent(message)}`;
              window.open(whatsappLink, '_blank');
              closeModal();
            }}
          >
            <div className="form-group">
              <label>Valor de entrada:</label>
              <input
                type="text"
                placeholder="R$"
                required
                value={entryValue}
                onChange={(e) => setEntryValue(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Data de nascimento:</label>
              <input
                type="date"
                required
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>CPF:</label>
              <input
                type="text"
                required
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Nome completo:</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Celular:</label>
              <input
                type="text"
                required
                value={celular}
                onChange={(e) => setCelular(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Possui Habilitação?</label>
              <select
                required
                value={habilitacao}
                onChange={(e) => setHabilitacao(e.target.value)}
              >
                <option value="">Selecione</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </select>
            </div>
            <div className="form-group">
              <label>DDD +</label>
              <input
                type="text"
                required
                value={ddd}
                onChange={(e) => setDdd(e.target.value)}
              />
            </div>
            <div className="form-buttons">
              <button type="submit" className="btn">
                Enviar
              </button>
              <button type="button" className="btn" onClick={closeModal}>
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  } else if (modalType === 'consorcio') {
    return (
      <div className="modal2-overlay" onClick={closeModal}>
        <div className="modal2" onClick={(e) => e.stopPropagation()}>
          <h2>{selectedDuravel.modelo} - Consórcio</h2>
          <p>{selectedDuravel.consorcio.descricao}</p>
          <p>Valor: {selectedDuravel.consorcio.valor}</p>
          <div className="modal2-buttons">
            <button
              className="btn"
              onClick={() => {
                const mensagem = `Olá, estou interessado no consórcio do produto ${selectedDuravel.modelo}.`;
                const whatsappLink = `https://wa.me/5592984615420?text=${encodeURIComponent(mensagem)}`;
                window.open(whatsappLink, '_blank');
              }}
            >
              Consorciar
            </button>
            <button className="btn" onClick={closeModal}>
              Fechar
            </button>
          </div>
        </div>
      </div>
    );
  } else if (modalType === 'informacoes') {
    return (
      <div className="modal2-overlay" onClick={closeModal}>
        <div className="modal2" onClick={(e) => e.stopPropagation()}>
          <h2>{selectedDuravel.modelo} - Informações</h2>
          {selectedDuravel.images && selectedDuravel.images.length > 0 ? (
            <div className="carousel-container">
              <button className="carousel-btn" onClick={handlePrevImage}>
                Anterior
              </button>
              <img
                src={selectedDuravel.images[currentImageIndex]}
                alt={`Imagem ${currentImageIndex + 1}`}
                className="carousel-img"
              />
              <button className="carousel-btn" onClick={handleNextImage}>
                Próxima
              </button>
            </div>
          ) : (
            <p>Imagem não disponível</p>
          )}
          <div className="modal2-buttons">
            <button className="btn" onClick={closeModal}>
              Fechar
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal2;
