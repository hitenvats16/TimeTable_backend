const { SchemaTypes } = require('mongoose');
const connection = require('../connection');
const Schema = connection.Schema;
const timeSlotSchema = new Schema({
    'slots':{type:SchemaTypes.Array}
});
const TimeSlotModel = connection.model('timeSlots', timeSlotSchema);
module.exports = TimeSlotModel;