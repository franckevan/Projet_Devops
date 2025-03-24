const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

// Connexion à MongoDB (ou votre base de données)
mongoose.connect('mongodb://localhost:27017/itemsDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error: ', err));

// Schéma Mongoose pour un "Item"
const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const Item = mongoose.model('Item', itemSchema);

// Route GET /items pour récupérer les objets
app.get('/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// Route POST /items pour créer un nouvel objet
app.post('/items', async (req, res) => {
  const newItem = new Item(req.body);
  await newItem.save();
  res.status(201).json(newItem);
});

// Lancer le serveur
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
