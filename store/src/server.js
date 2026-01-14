// server.js
import express from 'express';
const app = express();
const port = 5000;

app.use(express.json());

app.use('/assets', express.static('src/assets'));

const products = [
  { id: 1, title: 'iPhone', price: 699, image: '/assets/iphone.jpeg' },
  { id: 2, title: 'Samsung', price: 799, image: '/assets/samsung.jpeg' },
  { id: 3, title: 'Nothing', price: 729, image: '/assets/nothing.jpg' }
];

// GET all products
app.get('/products', (req, res) => {
  res.json(products);
});


// Start the server
app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
