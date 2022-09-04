const TimeSlotModel = require('../models/TimeSlots')
module.exports = {
    add(data) {
        const promise = TimeSlotModel.create(data);
        return promise;
    },
}