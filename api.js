var express = require('express');
var router = express();
var employee = require('./employeeschema');

router.get('/employees', function(req, res){

    employee.find({},function(err,data){
        if(err){throw err;}                   
        res.send(data);          
     });    
});

router.post('/empinsert', function(req, res,next){     
        
    console.log(req.body);
    employee.create(req.body).then(function(data){
        res.json(data);        
    }).catch(next);         
});

router.put('/empupdate/:id', (req, res, next) => {
    var parId = req.params.id;

    employee.findOneAndUpdate({ _id: parId}, {
            $set: {
                name: req.body.name, 
                email: req.body.email,
                dob: req.body.dob,
                department: req.body.department,
                gender: req.body.gender,
                age: req.body.age 
            }
        },
        function(err, result) {
            if (err) {
                res.json(err);
            } else {
                res.json(result);
                next;
            }
        });
});

router.delete('/empdelete/:id', function(req, res){
    var parId = req.params.id;
    employee.remove({_id:parId},function(err,result){
        
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(result);
        }
    } );
});
    

module.exports = router;
