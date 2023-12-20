const express = require('express');
const telegraf = require('telegraf');
const dotenv = require('dotenv');

// Chargement des variables d'environnement
dotenv.config();

// Création du serveur
const app = express();

// Configuration du webhook Telegram
app.post('/webhook', (req, res) => {
  // Récupération du message
  const message = req.body.message;

  // Envoi de la date d'aujourd'hui
  const today = new Date();
  const date = `Aujourd'hui, nous sommes le ${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}.`;

  // Envoi du message à Telegram
  telegraf.sendMessage(req.body.chat.id, date);

  // Réponse au webhook
  res.sendStatus(200);
});

// Démarrage du serveur
app.listen(3000);
