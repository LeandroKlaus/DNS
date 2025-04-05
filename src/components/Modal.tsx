import React, { useState, useEffect } from 'react';

interface ModalProps {
  closeModal: () => void;
  modalType: string;
  selectedMoto: any;
}

const Modal: React.FC<ModalProps> = ({ closeModal, modalType, selectedMoto }) => {
  const [entrada, setEntrada] = useState<string>('');
  const [nascimento, setNascimento] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');
  const [nome, setNome] = useState<string>('');
  const [habilitacao, setHabilitacao] = useState<string>('sim');
  const [celular, setCelular] = useState<string>('');

  const formatCurrency = (value: string) => {
    const numericValue = value.replace(/\D/g, '');
    const formattedValue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(parseFloat(numericValue) / 100);
    return formattedValue.replace('R$', 'R$ ');
  };

  const handleEntradaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatCurrency(e.target.value);
    setEntrada(formattedValue);
  };

  const handleSubmitFinanciamento = (e: React.FormEvent) => {
    e.preventDefault();
    const mensagem = `Solicitação de Financiamento:
    \nModelo: ${selectedMoto.modelo}
    \nValor de entrada: ${entrada}
    \nData de nascimento: ${nascimento}
    \nCPF: ${cpf}
    \nNome completo: ${nome}
    \nPossui habilitação: ${habilitacao}
    \nDDD + Celular: ${celular}`;
    const whatsappLink = `https://wa.me/5592981561566?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappLink, '_blank');
  };

  const handleSubmitConsorcio = () => {
    const mensagem = `Olá, estou interessado no consórcio da moto ${selectedMoto.modelo}`;
    const whatsappLink = `https://wa.me/5592981561566?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {modalType === 'financiamento' && (
          <>
            <h2>{selectedMoto.modelo}</h2>
            <form onSubmit={handleSubmitFinanciamento}>
              <label>
                Valor de entrada:
                <input 
                  type="text" 
                  name="entrada" 
                  value={entrada} 
                  onChange={handleEntradaChange} 
                />
              </label>
              <label>
                Data de nascimento:
                <input 
                  type="date" 
                  name="nascimento" 
                  value={nascimento}
                  onChange={(e) => setNascimento(e.target.value)}
                />
              </label>
              <label>
                CPF:
                <input 
                  type="text" 
                  name="cpf" 
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                />
              </label>
              <label>
                Nome completo:
                <input 
                  type="text" 
                  name="nome" 
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </label>
              <label>
                Possui Habilitação?
                <select 
                  name="habilitacao" 
                  value={habilitacao}
                  onChange={(e) => setHabilitacao(e.target.value)}
                >
                  <option value="sim">Sim</option>
                  <option value="nao">Não</option>
                </select>
              </label>
              <label>
                DDD + Celular:
                <input 
                  type="text" 
                  name="celular" 
                  value={celular}
                  onChange={(e) => setCelular(e.target.value)}
                />
              </label>
              <button type="submit" className="btn">Enviar</button>
              <button type="button" className="btn" onClick={closeModal}>Cancelar</button>
            </form>
          </>
        )}
        {modalType === 'consorcio' && (
          <>
            <h2>{selectedMoto.modelo} - Consórcio</h2>
            <p>{selectedMoto.consorcio.descricao}</p>
            <p>Valor: {selectedMoto.consorcio.valor}</p>
            <button type="button" className="btn" onClick={handleSubmitConsorcio}>Enviar</button>
            <button type="button" className="btn" onClick={closeModal}>Fechar</button>
          </>
        )}
        {modalType === 'informacoes' && (
          <>
            <h2>{selectedMoto.modelo} - Ficha Técnica</h2>
            <p>{selectedMoto.fichaTecnica?.Especificacoes_Gerais || 'Nenhuma informação disponível'}</p>
            <p>Motor: {selectedMoto.fichaTecnica?.Motor || 'Nenhuma informação disponível'}</p>
            <p>Transmissão: {selectedMoto.fichaTecnica?.Transmissao || 'Nenhuma informação disponível'}</p>
            <p>Suspensão e Freios: {selectedMoto.fichaTecnica?.Suspensao_e_Freios || 'Nenhuma informação disponível'}</p>
            <p>Dimensões: {selectedMoto.fichaTecnica?.Dimensoes || 'Nenhuma informação disponível'}</p>
            <p>Pneus: {selectedMoto.fichaTecnica?.Pneus || 'Nenhuma informação disponível'}</p>
            <button type="button" className="btn" onClick={closeModal}>Fechar</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;