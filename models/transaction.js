const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionsSchema = new Schema({
    w_id: {
        type: Schema.Types.String
    },
    tx_id: {
        type: Schema.Types.Number
    },
    from_w_id: {
        type: Schema.Types.String
    },
    to_w_id: {
        type: Schema.Types.String
    },
    w_id: {
        type: Schema.Types.String
    },
    pay_id: {
        type: Schema.Types.Number
    },
    skip_trans: {
        type: Schema.Types.Boolean
    },
    tx_time: {
        type: Schema.Types.Number
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('transactions', TransactionsSchema);