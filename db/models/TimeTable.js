const { SchemaTypes, Schema } = require('mongoose');
const connection = require('../connection');
const Schema = connection.Schema;
const TimeTableSchema = new Schema({
    'Branch': {
        type: SchemaTypes.String,
        required: true,
        unique: true
    },
    'Day': {
        //this needs to be changed
        type: SchemaTypes.String,
        required: true,
        unique: true
    },
    'Slot': {
        type: SchemaTypes.String,
        required: true
    },
    'Class': {
        type: Schema.Types.ObjectId,
        ref: 'Subjects'
    },
    'Subject': {
        type: Schema.Types.ObjectId,
        ref: 'Subjects'
    },
    'Teacher': {
        type: Schema.Types.ObjectId,
        ref: 'Subjects'
    },
});
const TimeTableModel = connection.model('TimeTable', TimeTableSchema);
module.exports = TimeTableModel;