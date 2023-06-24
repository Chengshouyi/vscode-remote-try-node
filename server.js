'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    let table = '<table style="border-collapse: collapse; border: 1px solid black;">';
    for (let i = 1; i <= 9; i++) {
        table += '<tr>';
        for (let j = 1; j <= 9; j++) {
            table += `<td style="border: 1px solid black; padding: 5px;">${j} x ${i} = ${i * j}</td>`;
        }
        table += '</tr>';
    }
    table += '</table>';
    res.set('Content-Type', 'text/html');
    res.send(table);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);