import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';


function Card({ image, name, price }) {
  const cardStyle = {
    background: 'linear-gradient(180deg, #0C152B 20%, #141F37 40%, #133146 70%)',
    borderRadius: '20px',
    borderColor: '#FFFFFF',
    boxShadow: '0 0 15px #eeeeeeff',
    width: '250px',
    padding: '30px 50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: "'Playfair Display', serif",
    color: '#FFFFFF',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow = `0 0 25px #93E1D3`)
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.boxShadow = `0 0 15px #FFFFFF`)
      }
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "100px",
          height: "100px",
          objectFit: "contain",
          marginBottom: "20px",
          marginTop: '20px',
        }}
      />
      <h3 style={{ marginLeft: '10px', marginRight: '10px' }}>{name}</h3>
      <p style={{ 
        color: '#93E1D3', 
        fontSize: '18px', 
        marginBottom: '20px', 
        marginTop: '8px' 
      }}>
        {price} moedas
      </p>
    </div>
  );
}

function Panel() {
  
  const [pocoes, setPocoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    console.log('fetch para: http://localhost:5001/api/pocoes');
    
    fetch('http://localhost:5001/api/pocoes')
      .then((res) => {
        console.log('Resposta: ', res.status, res.ok);
        if (!res.ok) {
          throw new Error('Erro ao buscar poções');
        }
        return res.json();
      })
      .then((data) => {
        console.log('Dados recebidos: ', data);
        console.log('Total de poções:', data.length);
        setPocoes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Erro encontrado', err);
        setErro(err.message);
        setLoading(false);
      });
  }, []);

  
  if (loading) {
    return (
      <div className='Grid'>
        <h3>Carregando poções mágicas...</h3>
      </div>
    );
  }

  if (erro) {
    return (
      <div className='Grid'>
        <h3>Erro ao carregar poções</h3>
        <p style={{ fontSize: '16px' }}>
          Certifique-se de que o servidor está rodando em http://localhost:5001
        </p>
        <p style={{ fontSize: '14px', color: 'red' }}>
          Erro: {erro}
        </p>
      </div>
    );
  }

  return (
    <div className='Grid'>
      
    <h3>Painel de poções</h3>

      <div className='card'>
        {pocoes.map((pocao) => (
          <Card
            key={pocao.id}
            image={pocao.imagem}
            name={pocao.nome}
            price={pocao.preco}
          />
        ))}

      </div>
    </div>
  );
}
export default Panel;          
export { Card };         