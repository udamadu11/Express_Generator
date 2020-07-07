const express = require('express');
const bodyParser = require('body-parser');
const LeadersRouter = express.Router();

LeadersRouter.use(bodyParser.json());

LeadersRouter.route('/')
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
    res.end('this not supported /Leaders');
})
.delete((req,res,next)=>{
    res.end('will delete All deatails');
});


LeadersRouter.route('/:LeadersId')
.all((req,res,next) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    next();
})
.get((req, res, next) => {
    res.end( req.params.LeadersId);
})
.post((req, res, next) => {
    res.end('POST operation not supported on /Leaders/:LeadersId');
})
.put((req,res,next) => {
    res.write('Updating the Leaders: ' + req.params.LeadersId + '\n');
    res.end('Will update the Leaders: ' + req.body.name +
        ' with details: ' + req.body.description);
})
.delete((req,res,next) => {
    res.end('Deleting promotion: ' + req.params.LeadersId);
});

module.exports = LeadersRouter;