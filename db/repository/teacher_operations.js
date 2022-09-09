const TeacherModel = require('../models/Teachers')
module.exports = {
    TeachersArray: [],
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
    async getAll(){
        const data =await TeacherModel.find();
        this.TeachersArray = [...data];
        return this.TeachersArray;
    }
}