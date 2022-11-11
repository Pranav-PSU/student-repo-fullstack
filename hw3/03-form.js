const http = require('http');
const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
const port = process.env.PORT || 5001;

const server = http.createServer((req, res) => {
    let url = new URL(req.url, `http://${req.headers.host}`);
    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/form') {
        res.end(fs.readFileSync(__dirname + '/03-form.html'));
    } else if (url.pathname === '/submitForm') {
        const queryParameters = url.searchParams;
        let text = '';
        queryParameters.forEach((Value, Key) => {
            if (Key === 'Newsletter') {
                Value === 'true'
                    ? (Value = 'Yes, I would like to join the newsletter')
                    : (Value = 'No, thank you.');
            }
            text += `<h2>${Key}: ${Value}</h2>`;
        });
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(text);
        res.end();
    }

    res.end();
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
