const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const motoSchema = new mongoose.Schema({
  modelo: String,
  imagem: String,
  consorcio: {
    descricao: String,
    valor: String
  },
  fichaTecnica: String
});

const Moto = mongoose.model('Moto', motoSchema);

app.get('/motos', async (req, res) => {
  const motos = await Moto.find();
  res.json(motos);
});

app.post('/motos', async (req, res) => {
  const novaMoto = new Moto(req.body);
  await novaMoto.save();
  res.json(novaMoto);
});

app.delete('/motos/:id', async (req, res) => {
  await Moto.findByIdAndDelete(req.params.id);
  res.json({ message: 'Moto excluída' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
