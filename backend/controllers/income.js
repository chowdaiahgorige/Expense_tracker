
const IncomeSchema=require('../modules/IncomeModel')
exports.addIncome=async(req,res)=>{
    const {title,amount,category,description,date}=req.body

    const income = new IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })
    try{
        //validation
        if(!title || !category ||!description ||!date){
            return res.status(400).json({message:"All fields are required"})
        }
        if(amount<=0 || !amount==="number"){
            return res.status(400).json({message:"amount should be a positive number"})
        }
        await income.save()
        res.status(200).json({message:"income added successfully"})
    }
    catch(err){
        console.error("Error saving income:", err);
        res.status(500).json({ message: "Server error", error: err.message });
    }
    console.log(income)
    
}
exports.getIncome=async(req,res)=>{
    const income=await IncomeSchema.find().sort({createdAt:-1})
    try{
        res.status(200).json(income)
    }
    catch(err){
        res.status(500).json({message:"server errot"})
    }
}
exports.deleteIncome=async(req,res)=>{
   const {id}=req.params;
 
   IncomeSchema.findByIdAndDelete(id)
    .then(()=>{
        res.status(200).json({message:"income deleted successfully"})
    })
    .catch((err)=>{
        res.status(500).json({message:"server error"})
    })
}