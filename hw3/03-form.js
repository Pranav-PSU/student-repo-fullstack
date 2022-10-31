const http = require('http');
const express = require('express');
var bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 5001;

// http://localhost:5001/form should return a form with input elements for username, email, and submit button

// http://localhost:5001/submit should return all the data the user entered

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/03-form.html');
});

app.get('/submitForm', (req, res) => {
    let newsletterText = req.query.checkbox
        ? 'Yes, I would like to join the newsletter.'
        : 'No, thank you.';

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
        `<h2>Name: ${req.query.name}</h2><h2>Email: ${req.query.email}</h2><h2>Comments: ${req.query.comments}</h2><h2>Newsletter: ${newsletterText}</h2>`
    );
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
