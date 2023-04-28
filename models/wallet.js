const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WalletsSchema = new Schema({
    w_id: {
        type: Schema.Types.String
    },
    remark: {
        type: Schema.Types.String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('wallets', WalletsSchema);