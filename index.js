const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

// Connexion à MongoDB

app.get('/items', (req, res) => res.json([{test: "ok"}]));
app.post('/items', (req, res) => res.json(req.body));

// Modèle et routes
const Item = mongoose.model('Item', new mongoose.Schema({ name: String, description: String }));

app.get('/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.post('/items', async (req, res) => {
  const newItem = new Item(req.body);
  await newItem.save();
  res.status(201).json(newItem);
});

app.listen(3000, () => console.log('Server running on port 3000'));