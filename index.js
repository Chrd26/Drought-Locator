import express from 'express';
const app = express();
const port = 3000;
import { homepageRouter } from './routers/homepage.js';

app.set('views', './views');
app.set('view engine', 'pug');

app.use('/', homepageRouter);

app.listen(port, () => {
    console.log(`Example app listening to port ${port}`);
})
