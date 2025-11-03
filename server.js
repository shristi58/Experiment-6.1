const express = require('express');
const app = express();

const logger = (req, res, next) => {
  const currentTime = new Date().toISOString();
  console.log(`[${currentTime}] ${req.method} ${req.url}`);
  next();
};

app.use(logger);

const authenticate = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authorization header missing or incorrect' });
  }
  const token = authHeader.split(' ')[1];
  if (token !== 'mysecrettoken') {
    return res.status(401).json({ message: 'Invalid token' });
  }
  next();
};

app.get('/public', (req, res) => {
  res.status(200).send('This is a public route. No authentication required.');
});

app.get('/protected', authenticate, (req, res) => {
  res.status(200).send('You have accessed a protected route with a valid Bearer token!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
