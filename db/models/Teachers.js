const { SchemaTypes, Schema } = require('mongoose');
const connection = require('../connection');
const Schema = connection.Schema;
const teacherSchema = new Schema({
    'Name': { 
        type: SchemaTypes.String, 
        required: true 
    },
    'Subjects': {
        type: Schema.Types.ObjectId,
        ref: 'Subjects'
    }
});
const TeacherModel = connection.model('Teachers', teacherSchema);
module.exports = TeacherModel;