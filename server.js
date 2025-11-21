const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let orders = [];

app.post('/api/order', (req, res) => {
  const order = req.body;
  orders.push(order);
  res.json({ message: 'Order received!', orderId: orders.length });
});

app.get('/api/orders', (req, res) => {
  res.json(orders);
});
app.get('/', (req, res) => {
  res.send('Campus Cravings Backend is Running.');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

