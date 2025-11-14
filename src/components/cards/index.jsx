function Card ({image, name, price}) {
     const cardStyle = {
            background: 'linear-gradient(180deg, #0C152B 20%, #141F37 40%, #133146 70%)',
            borderRadius: '20px',
            borderColor: '#FFFFFF',
            boxShadow: '0 0 15px #eeeeeeff',
            width: '250px',
            padding: '30px, 20px',
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
                width: "150px",
                height: "150px",
                objectFit: "contain", 
                marginBottom: "20px",
                marginTop: '20px',
    }}
/>
            <h3>{name}</h3>
            <p style={{ color: '#93E1D3' , fontSize: '18px', marginBottom: '20px', marginTop:'8px' }}>${price.toFixed(2)}</p>
        </div>
    );
}


export default Card;

