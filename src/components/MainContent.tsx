import React from 'react';
import '../styles/MainContent.css';

interface MainContentProps {
  consumiveis: any[];
  duraveis: any[];
  handleAvista: (consumivel: any) => void;
  handleParcelamento: (consumivel: any) => void;
  handleInformacoesConsumiveis: (consumivel: any) => void;
  handleDuravelFinanciamento: (duravel: any) => void;
  handleDuravelConsorcio: (duravel: any) => void;
  handleDuravelInformacoes: (duravel: any) => void;
}

const MainContent: React.FC<MainContentProps> = ({
  consumiveis,
  duraveis,
  handleAvista,
  handleParcelamento,
  handleInformacoesConsumiveis,
  handleDuravelFinanciamento,
  handleDuravelConsorcio,
  handleDuravelInformacoes,
}) => {
  const allProducts = [
    ...duraveis.map((p) => ({ ...p, category: 'duravel' })),
    ...consumiveis.map((p) => ({ ...p, category: 'consumivel' })),
  ];

  return (
    <div className="main-content">
      <h1 className="main-title">DNSites trazendo sua marca para a web.</h1>
      <p className="main-description">Solicite agora seu site premium.</p>
      <div className="products-grid">
        {allProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imagem} alt={product.modelo} className="product-image" />
            <h3 className="product-model">{product.modelo}</h3>
            <div className="product-buttons">
              {product.category === 'duravel' ? (
                <>
                  <button onClick={() => handleDuravelFinanciamento(product)}>
                    Financiamento
                  </button>
                  <button onClick={() => handleDuravelConsorcio(product)}>
                    Consórcio
                  </button>
                  <button onClick={() => handleDuravelInformacoes(product)}>
                    Informações
                  </button>
                </>
              ) : (
                <>
                  <button onClick={() => handleAvista(product)}>À vista</button>
                  <button onClick={() => handleParcelamento(product)}>
                    Parcelamento
                  </button>
                  <button onClick={() => handleInformacoesConsumiveis(product)}>
                    Informações
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
