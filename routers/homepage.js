const getExpressHomepage = require('express');
const homepageRouter = getExpressHomepage.Router();

const LoadHomepage = (req, res) => {
    res.send('<h1>Hello World</h1<br><h2>Hello World in h2</h2><br><br><p>Lorem Ipsum</p>');
}


homepageRouter.get('/', (req,res,next) => {
    debug.log('Load Homepage');
    next();
},  (req,res) => {
        LoadHomepage();
    })

module.export = homepageRouter;
