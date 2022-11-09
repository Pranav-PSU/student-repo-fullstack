const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

// http://localhost:5001/welcome should return a status code 200 with a welcome message of your choice in html format

// http://localhost:5001/redirect should redirect the request to '/redirected' by using 302 as the status code / the redirected page should return a redirected message of your choice

// http://localhost:5001/cache should return 'this resource was cached' in html format and set the cache max age to a day

// http://localhost:5001/cookie should return 'cookies… yummm' in plain text and set 'hello=world' as a cookie

// For other routes, such as http://localhost:5001/other, this exercise should return a status code 404 with '404 - page not found' in html format

const routes = ['welcome', 'redirect', 'redirected', 'cache', 'cookie', 'other'];

let getRoutes = () => {
    let result = '';
    routes.forEach((elem) => (result += `<li><a href="/${elem}">${elem}</a></li>`));
    return result;
};

app.get('/', (req, res) => {
    let routeResults = getRoutes();
    res.set('Content-Type', 'text/html');
    res.status(200).send(`<h2>Exercise 04</h2> <ul> ${routeResults} </ul>`);
});

app.get('/welcome', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.status(200).send('<h2>Hello there..! This is a welcome page.</h2>');
});

app.get('/redirect', (req, res) => {
    res.redirect(302, '/redirected');
});
app.get('/redirected', (req, res) => {
    res.send('Redirected here');
});
app.get('/cache', (req, res) => {
    res.set({
        'content-type': 'text/html',
        'Cache-control': 'max-age = 86400',
    });
    res.send('<h2>this resource was cached</h2>');
});
app.get('/cookie', (req, res) => {
    res.set({ 'Content-Type': 'text/plain' });
    res.cookie('hello', 'world');
    res.send('cookies... yummm');
});
app.get('*', (req, res) => {
    res.set({ 'Content-Type': 'text/html' });
    res.send('<h2>404 - page not found<h2>');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
