const RoomModel = require('../models/Rooms')
module.exports = {
    add(data) {
        const promise = RoomModel.create(data);
        return promise;
    },
}