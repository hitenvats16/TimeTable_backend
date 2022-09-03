const mongoose = require('mongoose');
const URL = 'mongodb+srv://devuser:devuser@cluster0.wilmxx0.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(URL,err=>{
    if(err){
        console.log('error occured: ', err);
    } else {
        console.log('Connection to DB succeeded');
    }
})

module.exports = mongoose;