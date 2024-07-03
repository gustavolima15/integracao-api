const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    //const resultados = await axios.get('http://localhost:3001/carros');
    const novoCarro = {
        modelo: 'Fusca',
        marca: 'VW'
    }
    const resultados = await axios.post('http://localhost:3001/carros', novoCarro)

    return res.json(resultados.data);
});

app.listen(3000);