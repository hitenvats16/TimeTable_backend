const logic = require('../logic/TimeTableLogic');
module.exports = {
    handleProcessing(req,res){
        let data = req.body;
        const load = data.load;
        const noOfTT = data.no_of_tt;
        const noOfslots = data.no_of_slots;
        logic.init(noOfTT,noOfslots);
        const result = logic.insert(load);
        logic.distroy();
        if(result) 
            res.json({result:result,status:200})
        else 
            res.json({status:400});
    }
}