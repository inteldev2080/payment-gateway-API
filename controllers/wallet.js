// Import model
const Wallets = require('../models/wallet');

exports.getWallet = async (req, res) => {
    const { remark } = req.query;

    res.send(`Get Wallet with remark ${remark}`);
};