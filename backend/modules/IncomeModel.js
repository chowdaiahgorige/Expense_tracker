const moongoose=require('mongoose')
const IncomeSchema=new moongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        maxLength:50
    },
    amount:{
        type:Number,
        required:true,
        trim:true,
        maxLength:20
    },
    type:{
        type:String,
        default:"income"
    
    },
    date:{
        type:Date,
        required:true,
        trim:true
    },
    category:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true,
        maxLength:20
    },
},{timestamps:true})

module.exports=moongoose.model("Income",IncomeSchema)