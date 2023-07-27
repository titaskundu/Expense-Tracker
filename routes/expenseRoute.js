const express = require('express');
const {addExpense,getAllExpense } = require('../controllers/expenseCtrl');

//router object
const router = express.Router()

//routes
//add expense POST
router.post('/add-expenses',addExpense)

//get expenses
router.post('/get-expenses',getAllExpense)




module.exports =router;