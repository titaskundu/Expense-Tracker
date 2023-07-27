const mongoose = require('mongoose')

const incomeSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, 'title is required']
    },
    amount: {
        type: Number,
        require: [true, 'amount is required']
    },
    date: {
        type: Date,
        require: [true, 'Date is required']
    },
    reference: {
        type: String,
        require: [true, 'Reference is required']
    }

}, { timestamps: true })

const incomeModel = mongoose.model('incomes', incomeSchema)