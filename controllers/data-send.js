const subjectOperations = require('../db/repository/subjects_operations');
const teacherOperations = require('../db/repository/teacher_operations');
module.exports = {
    sendSubjectData(req,res){
        const promise = subjectOperations.getAll();
        promise
            .then(data=>{
                res.json({'Data':data, status:200});
            })
            .catch(e=>{
                res.json({'Message':JSON.stringify(e),status:400});
            });  
    },
    sendTeachersData(req,res){
        const promise = teacherOperations.getAll();
        promise
            .then(data=>{
                res.json({'Data':data, status:200});
            })
            .catch(e=>{
                res.json({'Message':JSON.stringify(e),status:400});
            });  
    }
}