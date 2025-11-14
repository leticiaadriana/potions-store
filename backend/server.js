import express from 'express';
import cors from 'cors';
import { Sequelize, DataTypes } from 'sequelize';

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

const sequelize = new Sequelize()({
    dialect: 'sqlite',
    storage: 'memory',
    logging: false,
});

const Pocao = sequelize.define('Pocao', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nome: {type: DataTypes.STRING, allowNull: false },
    descricao: {type: DataTypes.TEXT, allowNull: false},
    imagem: {type: DataTypes.STRING, allowNull: false},
    preco: {type: DataTypes.FLOAT, allowNull: false},
});


const pocoes = [
     {
    nome: '🧪 Poção Blue Sky',
    descricao: 'Essa poção provê um surto de inspiração por 24 horas. Foi utilizada por John Lennon quando escreveu Lucy in the Sky with Diamonds.',
    imagem: 'https://images.unsplash.com/photo-1614854262340-ab1ca7d079c7?w=400',
    preco: 300,
  },
  {
    nome: '🌸 Poção do Perfume Misterioso',
    descricao: 'Essa poção faz com que você fique cheirando lilás e groselha por 24 dias. Essência muito admirada pelos bruxos.',
    imagem: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400',
    preco: 200,
  },
  {
    nome: '🌲 Poção de Pinus',
    descricao: 'Essa poção faz com que você fique 10 cm mais alto!',
    imagem: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400',
    preco: 3000,
  },
  {
    nome: '💀 Poção da Beleza Eterna',
    descricao: 'Veneno que mata rápido.',
    imagem: 'https://images.unsplash.com/photo-1518176258769-f227c798150e?w=400',
    preco: 100,
  },
  {
    nome: '🌈 Poção do Arco Íris',
    descricao: 'Traz felicidade momentânea. Pode durar de 10 minutos a 2 dias.',
    imagem: 'https://images.unsplash.com/photo-1595838216085-5a5c3e5ec5d0?w=400',
    preco: 120,
  },
  {
    nome: '🔮 Caldeirão das Verdades Secretas',
    descricao: 'As pessoas lhe dirão apenas verdades por 1 hora. É necessário beber os 5L.',
    imagem: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=400',
    preco: 150,
  },
];

async function initDB(){
    try {
        await sequelize.sync({force: true});
        await Pocao.bulkCreate(pocoes);
        console.log('Banco de dados inicializado com sucesso!');
    } catch (error) {
        console.error('Erro ao inicializar banco de dados: ', error);
    }
}



app.get('/api/pocoes', async(req, res) => {
    try {
        const pocoes = await Pocao.findAll();
        res.json(pocoes);
    } catch (error) {
        res.status(500).json({ error: 'Error ao buscar poções'});
    }
});

app.get('/api/pocoes/:id', async(req, res) => {
    try {
        const pocao = await Pocao.findByPk(req.params.id);
        if(pocao) {
            res.json(pocao);
        }else {
            res.status(404).json({error: 'Poção não encontrada'});
        }
    } catch (error) {
        res.status(500).json({error: 'Erro ao buscar poção'});
    }
});

app.post('/api/pocoes', async(req, res) => {
    try {
        const {nome, descricao, imagem, preco} = req.body;

        // tratar erro TODO

        const novaPocao = await Pocao.create({
            nome,
            descricao,
            imagem,
            preco: parseFloat(preco),
        });

        res.status(201).json(novaPocao);
    } catch (error) {
        res.status(500).json({error: 'Erro ao cadastrar poção'});
    }
});

app.delete('/api/pocoes/:id', async(req, res) => {
    try {
        const pocao = await Pocao.findByPk(req.params.id);

        // TODO tratar erro


        await pocao.destroy();
        res.json({message: 'Poção removida com sucesso'});
    } catch (error) {
        res.status(500).json({error: 'Erro ao remover poção'});
    }
});

initDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
        console.log(`Api disponível em http://localhost:${PORT}/api/pocoes`);
    });
});