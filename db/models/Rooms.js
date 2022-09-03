const { SchemaTypes, Schema } = require('mongoose');
const connection = require('../connection');
const Schema = connection.Schema;
const roomSchema = new Schema({
    'roomNumber': {
        type: SchemaTypes.String,
        required: true,
        unique: true
    },
    'roomType': {
        type: SchemaTypes.String,
        required: true
    },
    'assignedTo': {
        type: Schema.Types.ObjectId,
        ref: 'Subjects'
    },
});
const RoomModel = connection.model('rooms', roomSchema);
module.exports = RoomModel;