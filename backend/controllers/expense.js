
const ExpenseSchema=require('../modules/ExpenseModel')
exports.addExpense=async(req,res)=>{
    const {title,amount,category,description,date}=req.body

    const income = new ExpenseSchema({
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
        res.status(200).json({message:"expense added successfully"})
    }
    catch(err){
        console.error("Error saving expense:", err);
        res.status(500).json({ message: "Server error", error: err.message });
    }
    console.log(income)
    
}
exports.getExpense=async(req,res)=>{
    const income=await ExpenseSchema.find().sort({createdAt:-1})
    try{
        res.status(200).json(income)
    }
    catch(err){
        res.status(500).json({message:"server errot"})
    }
}
exports.deleteExpense=async(req,res)=>{
   const {id}=req.params;
 
   ExpenseSchema.findByIdAndDelete(id)
    .then(()=>{
        res.status(200).json({message:"expense deleted successfully"})
    })
    .catch((err)=>{
        res.status(500).json({message:"server error"})
    })
}