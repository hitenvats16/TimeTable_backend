const { SchemaTypes, Schema } = require('mongoose');
const connection = require('../connection');
const SubSchema = connection.Schema;
const subjectSchema = new SubSchema({
    'Name': {
        type: SchemaTypes.String,
        required: true
    },
});
const SubjectModel = connection.model('Subjects', subjectSchema);
module.exports = SubjectModel;