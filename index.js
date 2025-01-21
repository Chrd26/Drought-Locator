const express = require('express');
const app = express();
const port = 3000;
const homepage = require('./routers/homepage.js');

app.use('/', homepage);

app.listen(port, () => {
    console.log(`Example app listening to port ${port}`);
})
