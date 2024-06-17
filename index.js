const express = require('express');
const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    res.json('Olá API 1, porta 3000')
});

app.listen(3000);