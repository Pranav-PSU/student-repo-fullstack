const http = require('http');
const port = process.env.PORT || 5001;

// http://localhost:5001/welcome should return a status code 200 with a welcome message of your choice in html format

// http://localhost:5001/redirect should redirect the request to '/redirected' by using 302 as the status code / the redirected page should return a redirected message of your choice

// http://localhost:5001/cache should return 'this resource was cached' in html format and set the cache max age to a day

// http://localhost:5001/cookie should return 'cookies… yummm' in plain text and set 'hello=world' as a cookie

// http://localhost:5001/check-cookies should return 'yes' / 'no' in plain text depending on whether the browser has the 'hello' cookie

// For other routes, such as http://localhost:5001/other, this exercise should return a status code 404 with '404 - page not found' in html format

const server = http.createServer((req, res) => {
    const routes = [
        'welcome',
        'redirect',
        'redirected',
        'cache',
        'cookie',
        'check-cookies',
        'other',
    ];

    let getRoutes = () => {
        let result = '';

        routes.forEach((elem) => (result += `<li><a href="/${elem}">${elem}</a></li>`));

        return result;
    };
    // Add your code here
    switch (req.url) {
        case '/': {
            let routeResults = getRoutes();

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(`<h1>Exercise 01</h1>`);
            res.write(`<ul> ${routeResults} </ul>`);
            res.end();
            break;
        }
        case '/welcome': {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<h2>Hello there..! This is a welcome page.</h1>');
            res.end();
            break;
        }
        case '/redirect': {
            res.writeHead(302, { Location: '/redirected' });
            res.end();
            break;
        }
        case '/redirected': {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(
                '<h2>Hello again..! You are successfully redirected to /redirected page.</h1>'
            );
            res.end();
            break;
        }
        case '/cache': {
            res.writeHead(200, {
                'Content-Type': 'text/html',
                'Cache-Control': 'max-age = 86400',
            }); // Because there are 86400 seconds in a day
            res.write('<H2>This Resource Was Cached</H2>');
            res.end();
            break;
        }
        case '/cookie': {
            res.writeHead(200, {
                'Content-Type': 'text/plain',
                'Set-Cookie': 'hello=world',
            });
            res.write('cookies... yummm');
            res.end();
            break;
        }
        case '/check-cookies': {
            res.writeHead(200, {
                'Content-Type': 'text/plain',
            });
            let present = req.headers.cookie
                .split(';')
                .some((item) => item.trim().startsWith('hello='))
                ? 'yes'
                : 'no';
            res.write(present);
            res.end();
            break;
        }
        default: {
            res.writeHead(404, {
                'Content-Type': 'text/html',
            });
            res.write('404 - page not found');
            res.end();
        }
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
