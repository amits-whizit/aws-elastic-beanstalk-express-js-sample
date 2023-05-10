const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Greetings from WhizIt \n  Thank You Sir   To provide us oportunity to showcase our capabilities'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
