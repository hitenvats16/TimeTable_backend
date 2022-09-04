const { SchemaTypes, Schema } = require('mongoose');
const connection = require('../connection');
const SubSchema = connection.Schema;
const subjectSchema = new SubSchema({
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