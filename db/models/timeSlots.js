const { SchemaTypes } = require('mongoose');
const connection = require('../connection');
const Schema = connection.Schema;
const timeSlotSchema = new Schema({
    'slots':{type:SchemaTypes.Array}
});
const timeSlotModel = connection.model('timeSlots', timeSlotSchema);
module.exports = timeSlotModel;