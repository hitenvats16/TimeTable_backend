const subjectOperations = require('../db/repository/subjects_operations');
const teacherOperations = require('../db/repository/teacher_operations');
module.exports = {
    async insertSubjectData(req,res){
        console.log('request recieved to add subjects');
        const data = req.body;
        let success = true;
        await data.forEach(async (obj)=>{
            const res = await subjectOperations.add({
                'Name':obj
            });
            if(res){
                success = success && true;
            } else {
                success = success && false;
            }
        })
        if(success){
            res.json({status:200});
        } else {
            res.json({status:400});
        }
    },
    async insertTeachersData(req,res){
        console.log('request recieved to add teachers');
        const data = req.body;
        let success = true;
        await data.forEach(async (obj)=>{
            const res = await teacherOperations.add({
                'Name':obj
            });
            if(res){
                success = success && true;
            } else {
                success = success && false;
            }
        })
        if(success){
            res.json({status:200});
        } else {
            res.json({status:400});
        }  
    }
}