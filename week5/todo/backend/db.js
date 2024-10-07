const mongoose = require("mongoose");
mongoose.connect ("mongodb+srv://dhanunjay:8074388163@cluster0.gawpo4l.mongodb.net/")
const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo = mongoose.model('todos',todoSchema
)
module.exports = {
    todo
}