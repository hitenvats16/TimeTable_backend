const mongoose = require('mongoose');
const URL = 'mongodb+srv://devuser:devuser@cluster0.f8fvoj0.mongodb.net/Time_Table?retryWrites=true&w=majority'

mongoose.connect(URL,err=>{
    if(err){
        console.log('error occured: ', err);
    } else {
        console.log('Connection to DB succeeded');
    }
})

module.exports = mongoose;