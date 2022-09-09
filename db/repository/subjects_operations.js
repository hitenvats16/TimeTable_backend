const SubjectModel = require('../models/Subjects')
module.exports = {
    SubjectArray:[],
    add(data){
        const promise = SubjectModel.create(data);
        return promise;
    },
    async getAll(){
        const data = await SubjectModel.find();
        this.SubjectArray = [...data];
        return this.SubjectArray;
    },
    addTeacher(data,teacher){
        const promise = SubjectModel.updateOne(data,{
            'Teachers':teacher,
        });
        return promise;
    }
}

