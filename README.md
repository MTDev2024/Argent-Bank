# Argent Bank

Application bancaire web développée avec React, permettant aux utilisateurs de se connecter, consulter et modifier leur profil.

Projet 13 du parcours **Développeur d'application JavaScript React** — OpenClassrooms.

## Fonctionnalités

- Page d'accueil présentant les services de la banque
- Authentification par token JWT (login / logout)
- Page profil protégée (accessible uniquement aux utilisateurs connectés)
- Édition du prénom et du nom avec persistance en base de données
- Session persistante au refresh (localStorage + Redux)
- Interface responsive (mobile, tablette, desktop)

## Stack technique

**Front-end :**
- React (Vite)
- Redux Toolkit (state management)
- React Router (navigation SPA)
- Tailwind CSS v4

**Back-end (fourni) :**
- Node.js / Express
- MongoDB
- JWT (jsonwebtoken)

## Prérequis

- [Node.js](https://nodejs.org/) (v12 minimum pour le back-end)
- [MongoDB](https://www.mongodb.com/) (Community Server)
- npm

## Installation

### 1. Cloner le repository

```bash
git clone https://github.com/MTDev2024/argent-bank.git
cd argent-bank
```

### 2. Lancer le back-end

```bash
cd backend
npm install
npm run dev:server
npm run populate-db
```

Le serveur tourne sur `http://localhost:3001`.

### 3. Lancer le front-end

```bash
cd frontend
npm install
npm run dev
```

L'application tourne sur `http://localhost:5173`.

## Utilisateurs de test

| Prénom | Email | Mot de passe |
|--------|-------|-------------|
| Tony Stark | tony@stark.com | password123 |
| Steve Rogers | steve@rogers.com | password456 |

## Architecture du projet

```
src/
├── components/
│   ├── Header.jsx          # Navigation conditionnelle
│   ├── FeatureItem.jsx     # Composant réutilisable (x3)
│   ├── AccountCard.jsx     # Carte de compte (x3)
│   └── PrivateRoute.jsx    # Protection des routes
├── pages/
│   ├── Home.jsx            # Page d'accueil
│   ├── SignIn.jsx          # Formulaire de login
│   └── Profile.jsx         # Profil + édition nom
├── redux/
│   ├── store.js            # Configuration du store
│   └── slices/
│       ├── authSlice.js    # State authentification (token)
│       └── userSlice.js    # State profil (firstName, lastName, email)
├── services/
│   └── api.js              # Appels API (login, profile)
└── App.jsx                 # Routes de l'application
```

## Phase 2 — Modélisation API Transactions

Le fichier Swagger YAML (`swagger-phase2.yaml`) décrit les endpoints API pour la gestion des transactions bancaires :

| Méthode | Route | Description |
|---------|-------|-------------|
| GET | /accounts/{accountId}/transactions | Lister les transactions d'un compte |
| GET | /accounts/{accountId}/transactions/{transactionId} | Détails d'une transaction |
| PATCH | /accounts/{accountId}/transactions/{transactionId} | Modifier category ou notes |
| DELETE | /accounts/{accountId}/transactions/{transactionId} | Supprimer category ou notes |

Ce fichier est consultable dans l'[éditeur Swagger](https://editor.swagger.io/).
