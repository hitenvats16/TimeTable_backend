const SubjectModel = require('../models/Subjects')
module.exports = {
    add(data){
        const promise = SubjectModel.create(data);
        return promise;
    },
}

