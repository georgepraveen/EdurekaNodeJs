var mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({

    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    dob: {
        type:String,
        required:true
    },
    department: {
        type:String,
        required:true
    },
    gender: {
        type:String,
        required:true
    },
    age: {
        type:String,
        required:true
    }
});
var employeeDetails = mongoose.model('employees', employeeSchema);
module.exports = employeeDetails;