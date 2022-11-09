const express = require('express');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 5001;
// Use the express-session module
app.use(
    session({
        store: new session.MemoryStore(),
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false },
    })
);

app.get('/favicon.ico', (req, res) => res.status(204));

//Middleware gets executed for every route
app.use((req, res, next) => {
    res.set({ 'Content-Type': 'text/plain' });
    res.write(`Currently on route ${req.url}\n\n`);
    if (req.session.previouslyVisited) {
        req.session.previouslyVisited.push(`${req.url}`);
        let resp = 'Previously Visited';
        let pv = req.session.previouslyVisited.join('\n');
        res.write(resp + '\n' + pv);
    } else {
        req.session.previouslyVisited = [];
        req.session.previouslyVisited.push(`${req.url}`);
    }
    next();
});

app.get('*', (req, res, next) => {
    res.send();
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
