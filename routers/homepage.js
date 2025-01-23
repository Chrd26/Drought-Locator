import express from 'express'
const homepageRouter = express.Router();

homepageRouter.get('/', (req,res,next) => {
    console.log('Load Homepage');
    next();
},  (req,res) => {
        res.render('index') 
    })

export {homepageRouter};
