const { SchemaTypes, Schema } = require('mongoose');
const connection = require('../connection');
const Schema = connection.Schema;
const subjectSchema = new Schema({
    'Name': {
        type: SchemaTypes.String,
        required: true
    },
    'Teachers': {
        type: Schema.Types.ObjectId,
        ref: 'Teachers'
    }
});
const SubjectModel = connection.model('Subjects', subjectSchema);
module.exports = SubjectModel;