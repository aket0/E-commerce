# Utilisation de l'image de base Node.js LTS
FROM node:18 AS builder

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code de l'application
COPY . .



# Commande pour démarrer l'application
CMD ["npm", "start"]
