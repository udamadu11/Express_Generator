const express = require('express');
const bodyParser = require('body-parser');
const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());

promotionRouter.route('/')
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
    res.end('this not supported /promtiom');
})
.delete((req,res,next)=>{
    res.end('will delete All deatails');
});

promotionRouter.route('/:promotionId')
.all((req,res,next) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    next();
})
.get((req, res, next) => {
    res.end( req.params.promotionId);
})
.post((req, res, next) => {
    res.end('POST operation not supported on /promotion/:promotionId');
})
.put((req,res,next) => {
    res.write('Updating the promotion: ' + req.params.promotionId + '\n');
    res.end('Will update the promotion: ' + req.body.name +
        ' with details: ' + req.body.description);
})
.delete((req,res,next) => {
    res.end('Deleting promotion: ' + req.params.promotionId);
});

module.exports = promotionRouter;