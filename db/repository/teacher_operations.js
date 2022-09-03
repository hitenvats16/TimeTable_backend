const TeacherModel = require('../models/Teachers')
module.exports = {
    add(data) {
        const promise = TeacherModel.create(data);
        return promise;
    },
    addSubject(data,subject){
        const promise = TeacherModel.updateOne(data,{
            'Subjects':subject
        });
        return promise;
    },
    getAll(){
        const promise = TeacherModel.find();
        return promise;
    }
}