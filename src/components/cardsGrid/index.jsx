import Card from '../cards';
import './style.css'

function HomeGrid (){
    return(
        <div className='Grid'>
            <h3 style={{marginBottom: '50px'}}>Nossos produtos:</h3>
            <div className='card'>
                <Card
                image="https://i.ibb.co/pyhZJXf/rsz-lilas.png"
                name="Poção do Perfume Misterioso"
                price={200}
             />
              <Card
                image="https://i.ibb.co/ZzS7xb2/rsz-sky.png"
                name="Poção Blue Sky"
                price={300}
            />
             <Card
                image="https://i.ibb.co/DkzdL1q/rsz-pinus.png"
                name="Poção de Pinus"
                price={3000}
            />
            </div>
                <button>Compre conosco!</button>
        </div>    
    );
}

export default HomeGrid;