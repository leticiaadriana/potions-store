import {Link} from "react-router-dom"
import Card from '../cards';
import './style.css'    

function StaticCard ({image, name, price}) {
     const cardStyle = {
            background: 'linear-gradient(180deg, #0C152B 20%, #141F37 40%, #133146 70%)',
            borderRadius: '20px',
            borderColor: '#FFFFFF',
            boxShadow: '0 0 15px #eeeeeeff',
            width: '250px',
            padding: '30px, 50px',
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
            <h3 style={{marginLeft:'10px', marginRight:'10px'}}>{name}</h3>
            <p style={{ color: '#93E1D3' , fontSize: '18px', marginBottom: '20px', marginTop:'8px'}}>${price.toFixed(2)}</p>
        </div>
    );
}


function HomeGrid (){
    return(
        <div className='Grid'>
            <h3 style={{marginBottom: '50px'}}>Nossos produtos:</h3>
            <div className='card'>
                <StaticCard
                image="https://i.ibb.co/pyhZJXf/rsz-lilas.png"
                name="Poção do Perfume Misterioso"
                price={200}
             />
              <StaticCard
                image="https://i.ibb.co/ZzS7xb2/rsz-sky.png"
                name="Poção Blue Sky"
                price={300}
            />
             <StaticCard
                image="https://i.ibb.co/DkzdL1q/rsz-pinus.png"
                name="Poção de Pinus"
                price={3000}
            />
            </div>
                <Link to="/buy">
                    <button>Ver mais produtos</button>
                </Link>
        </div>    
    );
}

export default HomeGrid;
export { StaticCard };