const express = require('express');
const bodyParser = require('body-parser');
const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plan');
    next();
  })
.get((req,res,next)=>{
    res.end('will all the deatails to you');
  })
.post((req,res,next)=>{
    res.end('will carry ' + req.body.name + ' with details ' + req.body.description);
  })
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end('this not supported /dishes');
})
.delete((req,res,next)=>{
    res.end('will delete All deatails');
});

dishRouter.route('/:dishId')
.all((req,res,next) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    next();
})
.get((req, res, next) => {
    res.end( req.params.dishId);
})
.post((req, res, next) => {
    res.end('POST operation not supported on /dishes/:dishId');
})
.put((req,res,next) => {
    res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end('Will update the dish: ' + req.body.name +
        ' with details: ' + req.body.description);
})
.delete((req,res,next) => {
    res.end('Deleting dish: ' + req.params.dishId);
});
module.exports = dishRouter;