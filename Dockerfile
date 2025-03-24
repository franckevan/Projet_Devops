# Utiliser une image Node.js officielle comme base
FROM node:14

# Créer et définir le répertoire de travail
WORKDIR /app

# Copier package.json et package-lock.json pour l'installation des dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste de l'application dans le conteneur
COPY . .

# Exposer le port sur lequel l'application écoute
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["node", "index.js"]
