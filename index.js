const express = require('express');
const app = express();
const path = require('path');

// Postavite statičku rutu za dostup slika
app.use('/images', express.static(path.join(__dirname, 'images')));
const port = 3000;

// Simulirani podaci
const examples = [
  {
    id: 1,
    name: 'todo-app',
    image: '/images/1.png',
    link: 'https://famous-figolla-2023ec.netlify.app',
    code : 'https://github.com/minjamiljkovic/todo-app',
  },
  {
    id: 2,
    name: 'tip-calculator',
    image: '/images/2.png',
    link: 'https://magnificent-raindrop-201fe4.netlify.app',
    code : 'https://github.com/minjamiljkovic/tip-calculator',

  },
  {
    id: 3,
    name: 'comfy-shop',
    image: '/images/3.png',
    link: 'https://phenomenal-souffle-19bca2.netlify.app/products.html',
    code : 'https://github.com/minjamiljkovic/comfy-shop',
  },
  {
    id: 4,
    name: 'calculator-app',
    image: '/images/4.png',
    link: 'https://lovely-cuchufli-88a5a7.netlify.app/',
    code : 'https://github.com/minjamiljkovic/calculator-app',
  },
  {
    id: 5,
    name: 'glint',
    image: '/images/5.png',
    link: 'https://polite-flan-4256c8.netlify.app/',
    code : 'https://github.com/minjamiljkovic/glint',
  },
  {
    id: 6,
    name: 'agency-lancer',
    image: '/images/6.png',
    link: 'https://thunderous-bubblegum-9a2ded.netlify.app/',
    code : 'https://github.com/minjamiljkovic/agencylancer',
  },
  {
    id: 7,
    name: 'agency-lancer',
    image: '/images/7.png',
    link: 'https://voluble-pegasus-c6fbf3.netlify.app/',
    code : 'https://github.com/minjamiljkovic/agency',
  },
  {
    id: 8,
    name: 'advice-generator-app',
    image: '/images/8.png',
    link: 'https://magical-kringle-e75c61.netlify.app/',
    code : 'https://github.com/minjamiljkovic/advice-generator-app',
  },
  {
    id: 9,
    name: 'results-summary-component-main',
    image: '/images/9.png',
    link: 'https://glittering-rolypoly-2ffc99.netlify.app/',
    code : 'https://github.com/minjamiljkovic/results-summary-component-main',
  },
  {
    id: 10,
    name: 'random-user',
    image: '/images/10.png',
    link: 'https://incandescent-pastelito-7ee146.netlify.app/',
    code : 'https://github.com/minjamiljkovic/random-user',
  },
  {
    id: 11,
    name: 'cocktail-api',
    image: '/images/11.png',
    link: 'https://heartfelt-froyo-9f12fc.netlify.app/',
    code : 'https://github.com/minjamiljkovic/cocktail-api',
  },
];

// Ruta za dohvat svih primjera
app.get('/api/examples', (req, res) => {
  res.json(examples);
});

// Slušanje na zadanom portu
app.listen(port, () => {
  console.log(`API je pokrenut na portu ${port}`);
});
