const incomeModel=require("../models/incomeModel")
const getAllIncome=async(req,res)=>{
    try{
        const incomes=await incomeModel.find({})
        res.status(200).json(incomes);
    }catch(error){
        console.log(error)
        res.status(500).json(error);
    }
};
const addIncome=async(req,res)=>{
    try{
        const newIncome = new incomeModel(req.body)
        await newIncome.save()
        res.status(201).send('Income created')
    }catch(error){
        console.log(error)
        res.status(500).json(error);
    }

};

module.exports={getAllIncome,addIncome}