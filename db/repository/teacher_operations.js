const TeacherModel = require('../models/Teachers')
module.exports = {
    add(data) {
        const promise = TeacherModel.create(data);
        return promise;
    },
}