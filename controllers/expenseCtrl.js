const expenseModel=require("../models/expenseModel")
const getAllExpense=async(req,res)=>{
    try{
        const expenses=await expenseModel.find({})
        res.status(200).json(expenses);
    }catch(error){
        console.log(error)
        res.status(500).json(error);
    }
};
const addExpense=async(req,res)=>{
    try{
        const newExpense = new expenseModel(req.body)
        await newExpense.save()
        res.status(201).send('Expense created')
    }catch(error){
        console.log(error)
        res.status(500).json(error);
    }

};

module.exports={getAllExpense,addExpense}