import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import logo from './assets/GS.svg';
import centralLogo from './assets/Braga.svg';
import instaIcon from './assets/Insta.svg';
import wppIcon from './assets/Wpp.svg';
import locIcon from './assets/Loc.svg';

const App: React.FC = () => {
  const [motos, setMotos] = useState<any[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedMoto, setSelectedMoto] = useState<any>(null);
  const [modalType, setModalType] = useState<string>(''); // Novo estado para determinar o tipo de modal
  const [isFooterVisible, setIsFooterVisible] = useState<boolean>(false); // Novo estado para controlar a visibilidade do footer

  const [entrada, setEntrada] = useState<string>('');
  const [nascimento, setNascimento] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');
  const [nome, setNome] = useState<string>('');
  const [habilitacao, setHabilitacao] = useState<string>('sim');
  const [celular, setCelular] = useState<string>('');

  useEffect(() => {
    axios.get('http://localhost:5000/motos')
      .then(response => {
        setMotos(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar motos', error);
      });
  }, []);

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
    setSelectedMoto(moto);
    setModalType('financiamento');
    setShowModal(true);
  };

  const handleConsorcio = (moto: any) => {
    setSelectedMoto(moto);
    setModalType('consorcio');
    setShowModal(true);
  };

  const handleInformacoes = (moto: any) => {
    setSelectedMoto(moto);
    setModalType('informacoes');
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedMoto(null);
    setModalType(''); // Reseta o tipo de modal
  };

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

  const handleWhatsapp = (moto: any) => {
    const mensagem = `Olá, fiquei interessado em mais informações sobre a moto ${moto.modelo}`;
    const whatsappLink = `https://wa.me/5592981561566?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <img src={logo} alt="Logo" className="GS" />
          <a href="#" className="nav-large">Gustavo Sadok</a>
        </div>
        <div className="header-logo-center">
          <img src={centralLogo} alt="Central Logo" />
        </div>
        <nav className="nav-icons">
          <ul className="nav-menu-icons">
            <li>
              <a href="https://www.instagram.com/gustavomt09yt" target="_blank" rel="noopener noreferrer">
                <img src={instaIcon} alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="https://wa.me/5592981561566?text=Estou%20interessado%20em%20adquirir%20uma%20nova%20moto" target="_blank" rel="noopener noreferrer">
                <img src={wppIcon} alt="WhatsApp" />
              </a>
            </li>
            <li>
              <a href="https://maps.app.goo.gl/fwahKuGHbpweXcbj7" target="_blank" rel="noopener noreferrer">
                <img src={locIcon} alt="Localização" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="main-content">
        <h1 className="main-title">Gustavo Sadok, seu consultor autorizado Yamaha.</h1>
        <p className="main-description">Compre agora sua moto 0km.</p>
        <div className="moto-gallery">
          {motos.map((moto, index) => (
            <div key={index} className="moto-card">
              <img src={moto.imagem} alt={`Modelo de Moto ${index + 1}`} className="moto-image" />
              <div className="moto-buttons">
                <button className="btn" onClick={() => handleFinanciamento(moto)}>Financiamento</button>
                <button className="btn" onClick={() => handleConsorcio(moto)}>Consórcio</button>
                <button className="btn" onClick={() => handleInformacoes(moto)}>Informações</button>
                <button className="btn" onClick={() => handleWhatsapp(moto)}>Whatsapp</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal && selectedMoto && (
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
                <h2>{selectedMoto.modelo}</h2>
                <div className="ficha-tecnica">
                  <p>{selectedMoto.fichaTecnica}</p>
                </div>
                <button type="button" className="btn" onClick={closeModal}>Fechar</button>
              </>
            )}
          </div>
        </div>
      )}
      <footer className={isFooterVisible ? "footer footer-visible" : "footer"}>
        <div className="footer-left">
          <p>&copy; 2025 Gustavo Sadok. Todos os direitos reservados.</p>
          <p>Sua moto 0km é a nossa prioridade.</p>
        </div>
        <div className="footer-center">
          <img src={logo} alt="Logo" className="footer-logo" />
        </div>
        <div className="footer-right">
          <a href="https://github.com/LeandroKlaus" target="_blank" rel="noopener noreferrer" className="footer-powered">Powered by @klausdev</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
