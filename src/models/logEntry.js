const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// # Log Entry

//     * Title - Text
//     * Start Date - DateTime

//         - End Time - DateTime
//             * Description - Text
//             * Comments - Text
//             * Rating - scale of 1 - 5
//                 * Date Visited
//                     * Latitude - Number
//                     * Created At - DateTime
//                         * Updated At - DateTime
//                             * Image - Text - URL
// \* Longitude - Number

const requiredString = {
    type: String,
    required: true
}

const logEntrySchema = new Schema({
    title: requiredString,
    author: String,
    body: String,
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0,
    },
    latitude: {
        type: Number,
        required: true,
        min: -90,
        max: 90
    },
    longitude: {
        type: Number,
        required: true,
        min: -180,
        max: 180,
    }, 
    visitDate: {
        type: Date,
        required: true
    },
    image: String 
    
}, {
    timestamps: true
})

const logEntry = mongoose.model('logEntry', logEntrySchema)

module.exports = logEntry;