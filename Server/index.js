// Core
const express = require ('express');
const app = express ();
const bodyParser = require ('body-parser');
const cors = require ('cors');

// Сервер Node
const nodeserver = require ('./config/nodeserver');
const port = nodeserver.port;
const ip = nodeserver.ip;

// Бодипарсер для парсинга простых HTTP-запросы с заданным телом и параметрами.
app.use (bodyParser.urlencoded ({ extended: true }));

app.use (cors ());
app.use (bodyParser.json ());

require ('./router') (app);


app.listen (port, () => {
    console.log (`Server started at ${new Date ()}`);
    console.log (`Server is available: ${ip}:${port}`);
});
