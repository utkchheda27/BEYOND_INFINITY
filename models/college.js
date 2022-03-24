const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema({
    name:{
        type:String
    },
    establishment:{
        type:String
    },
    universityAffiliation:{
        type:String
    },
    facilities:{
        type:[String]
    },
    address:{
        type:String
    },
    courses:{
        type:[
            {
                courseName: String,
                level:String,  //UG or PG or Diploma
                intake:Number
            }
        ]
    },
   url:{
       type:String
   }
})

const NewCollege = new mongoose.model("NewCollege",collegeSchema);

module.exports = NewCollege;