const express = require('express');
const axios = require('axios');

const app = express();

const instanciaAxios = axios.create({
    baseURL:'http://localhost:3001',
})

app.use(express.json());

app.get('/', async (req, res) => {
    //const resultados = await axios.get('http://localhost:3001/carros');
    const novoCarro = {
        modelo: 'Jetta',
        marca: 'VW'
    }
    const resultados = await instanciaAxios.post('/carros', novoCarro)

    return res.json(resultados.data);
});

app.listen(3000);