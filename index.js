const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res, next) => {
    console.log('What is next');
    next();
}, (req, res) => {
    res.send('<h1>Hello World!</h1><br><h2>Hello World in h2</h2>')
    })

app.listen(port, () => {
    console.log(`Example app listening to port ${port}`);
})
