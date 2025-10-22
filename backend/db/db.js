const mongoose=require('mongoose')
const Db=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connected to db")
    }catch(err){
        console.log("db connection failed",err)
    }
}
module.exports=Db