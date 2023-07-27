const express = require('express');
const {addIncome,getAllIncome } = require('../controllers/incomeCtrl');

//router object
const router = express.Router()

//routes
//add income POST
router.post('/add-incomes',addIncome)

//get incomes
router.post('/get-incomes',getAllIncome)