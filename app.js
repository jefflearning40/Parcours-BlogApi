// const express = require('express');
// const fs = require('fs');
// const app = express();
// const path = require('path');

// const readJson = (path) => {
//   const raw = fs.readFileSync(path, 'utf-8');
//   return JSON.parse(raw);
// };

// const writeJson = (path, data) => {
//   fs.writeFileSync(path, JSON.stringify(data, null, 2));
// };
// app.use(express.json());

// // Fonctions utilitaires pour lire/écrire des fichiers JSON à placer ici
// const posts = require('./data/posts.json');
// const comments = require('./data/comments.json');

// // Test de démarrage
// app.get('/', (req, res) => {
//   res.send('Bienvenue sur l’API du mini-blog !');
//   afficherFichier('data/posts.json');
  
//   afficherFichier('data/comments.json');
// });

// // Routes à compléter ici
// const afficherFichier = (chemin) => {
//   const contenu = readJson(chemin);
//   console.log(contenu);
// };

// // Lancement du serveur
// const PORT = 3000;
// app.listen(PORT, () => {
//   //console.log(`Serveur lancé sur http://localhost:${PORT}`);
// });


const express = require('express');
const fs = require('fs');
const path = require('path');

// Initialisation de l'application Express
const app = express();

// Fonction pour lire un fichier JSON
const readJson = (filePath) => {
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw);
};

// Fonction pour écrire dans un fichier JSON
const writeJson = (filePath, data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};


app.use(express.json());

// Lecture des fichiers JSON
const posts = readJson('./data/posts.json');
const comments = readJson('./data/comments.json');

// Route pour afficher les posts sur la page d'accueil
app.get('/', (req, res) => {
  res.send(`
    Bienvenue sur l'API du mini-blog !
    Contenu de posts.json :
    ${JSON.stringify(posts, null, 2)}
  `);

  afficherFichier('./data/posts.json');
  afficherFichier('./data/comments.json');
});

// Fonction pour afficher le contenu d'un fichier dans la console
const afficherFichier = (filePath) => {
  const contenu = readJson(filePath);
  console.log(contenu);
};
app.get('/posts/:id',(req,res)=>{
    const id=parseInt(req.params.id)
    const post=(films.find(f =>f.id===id))
    if (!post){
        
        res.status(404).send('post not found')
    }else{
        res.json(film).status(200)
    }
 })
// Lancement du serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
