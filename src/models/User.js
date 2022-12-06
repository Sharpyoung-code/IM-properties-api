const mongoose= require('mongoose')

const KinSchema = new mongoose.Schema({
    nextofkin:{
        type:String
    },
    phone:{
        type:Number
    },
    address:{
        type:String
    },
});

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique: true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    role:{
        type:String,
        enum:['buyer','ESP',"admin"],
        default:'buyer'
    },
    referer:{
        type:String,
    },
    firstname:{
        type:String,
    },
    lastname:{
        type:String,   
    },
    country:{
        type:String,
    },
    state:{
        type:String,      
    },
    lga:{
        type:String,      
    },
    gender:{
        type:String,  
    },
    phone1:{
        type:Number,
    },
    phone2:{
        type:Number,
    },
    date_of_birth: {
        type: Date
    },
    occupation: {
        type: String
    },
    address:{
        type:String,
    },
    pictureupload:{
    type: String,
   },
   idupload:{
    type: String,
   },
   kin:{
        type: KinSchema,
        
    },
},{
    timestamps:true
})



module.exports = mongoose.model('User', UserSchema)