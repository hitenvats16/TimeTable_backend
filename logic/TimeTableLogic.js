const operations = {
    timeTable: [],
    noOfTT: 0,
    noOfSlots: 0,
    slotsIndex: [],
    init(noOfTT, noOfSlots) {
        this.noOfTT = noOfTT;
        this.noOfSlots = noOfSlots;
        while (noOfTT--) {
            const arr = new Array(noOfSlots).fill(null);
            this.timeTable.push(arr);
            this.slotsIndex.push(0);
        }
    },
    insert(load) {
        console.table(this.timeTable)
        load.forEach(obj=>{
            let teachers = obj.Teachers;
            let subject = obj.Subject;
            this.prepareOneDay(teachers,subject);
        })
        return this.timeTable;
    },
    distroy(){
        this.timeTable=[];
        this.slotsIndex=[];
    },
    isNotPresent(slot, teacher, tt) {
        for (let t = tt - 1; t >= 0; t--) {
            let data = this.timeTable[t][slot];
            if (!data)
                continue;
            if (data.Teacher == teacher) {
                return false;
            }
        }
        return true;
    },
    prepareOneDay(teachers,subject) {
        let teacherIdx = 0;
        for (let tt = 0; tt < this.noOfTT; tt++) {
            let slot = this.slotsIndex[tt];
            let teacher = teachers[teacherIdx];
            while (!this.isNotPresent(slot, teacher, tt) && tt<this.noOfTT){
                slot = (slot+1)%this.noOfSlots;
                if(this.timeTable[tt][slot] && tt<this.noOfTT) tt++;
            }
            if(this.timeTable[tt][slot]) return;
            this.timeTable[tt][slot] = {
                Teacher: teacher,
                Subject:subject,
            }
            teacherIdx = (teacherIdx + 1) % teachers.length;
            this.slotsIndex[tt] = slot+1;
        }
    }
}

module.exports = operations;