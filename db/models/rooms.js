const { SchemaTypes } = require('mongoose');
const connection = require('../connection');
const Schema = connection.Schema;
const roomSchema = new Schema({
    // 'userid':{type:SchemaTypes.String, required:true, unique:true},
    // 'password':{type:SchemaTypes.String, required:true},
    // 'phone':{type:SchemaTypes.String, required:true},
    // 'personalInfo':{},
    // 'address':{type:SchemaTypes.Array}
    'roomNumber':{type:SchemaTypes.String, required:true, unique:true},
    'roomType':{type:SchemaTypes.String, required:true},
    'assignedTo':{},
});
const roomModel = connection.model('rooms', roomSchema);
module.exports = roomModel;