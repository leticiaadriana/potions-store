import {useEffect, useState} from 'react';
import PotionCard from './Card'

function CardList() {
  const [potions, setPotions] = useState([]);

  useEffect (() => {
    //backend
    fetch('http://localhost:3001/api/potions')
    .then((res) => res.json())
    .then((data) => setPotions(data))
    .catch((err) => console.error(err));
  }, []);

  return(
    <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', justifyContent: 'center' }}>
      {potions.map((potion) => (
        <PotionCard
          key={potions.id}
          image={potions.image}
          name={potions.name}
          price={potions.price}
          description={potions.description}
        />
      ))}
    </div>
  );
}

export default CardList;

