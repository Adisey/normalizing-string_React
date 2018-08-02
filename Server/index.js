/**
 * Created by PhpStorm
 * Project p900-React-test
 * User: Adisey
 * Date: 01.08.2018
 * Time: 21:23
 */

const express = require ('express');
const app = express ();
const bodyParser = require ('body-parser');

// Сервер Node
const nodeserver = require ('./config/nodeserver');
const port = nodeserver.port;
const ip = nodeserver.ip;

// Бодипарсер для парсинга простых HTTP-запросы с заданным телом и параметрами.
app.use (bodyParser.urlencoded ({ extended: true }));

require ('./router') (app);


app.listen (port, () => {
    console.log (`Server started at ${new Date ()}`);
    console.log (`Server is available: ${ip}:${port}`);
});
